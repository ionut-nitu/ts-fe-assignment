import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useRef } from "react";
import { Editor, useEditorsState } from "../../../store/store";
import {  $getRoot, $getSelection, $isParagraphNode, 
  $isRangeSelection, $isTextNode, $setSelection,
  COMMAND_PRIORITY_LOW, COMMAND_PRIORITY_NORMAL, 
  KEY_ARROW_DOWN_COMMAND, KEY_ARROW_LEFT_COMMAND,
  KEY_ARROW_RIGHT_COMMAND, KEY_ARROW_UP_COMMAND, 
  SELECTION_CHANGE_COMMAND 
} from "lexical";

interface ValuesRef {
  editors: {[key:string]: Editor};
  indexMap: {
    [key: number]: string;
  };
  focusedEditor: string | null;
}

export default function MyCustomAutoFocusPlugin({id, index}: {id: string; index:number}) {
  const [editor] = useLexicalComposerContext();
  const { editors, registerEditor, changeEditorState, indexMap, focusedEditor, focusEditor} = useEditorsState();

  useEffect(() => {
    registerEditor(id, editor, index);
  },[])

  const valuesRef = useRef<ValuesRef>();
  
  valuesRef.current = {
    editors,
    indexMap,
    focusedEditor
  }

  const navigateToNextEditor = (e: any) => {
    const editors = valuesRef.current?.editors || {};
    const indexMap = valuesRef.current?.indexMap || {};
    const focusedEditor = valuesRef.current?.focusedEditor || null;
    const currentEditor =  editors[focusedEditor || ''] || { index: 0};
    const nextEditor = editors[indexMap[currentEditor?.index + 1] || 0];
    const selection = $getSelection();
    const root = $getRoot();
    if ( selection !== null && $isRangeSelection(selection) && selection.isCollapsed()) {
      const anchorNode = selection.anchor.getNode();
      if (anchorNode !== null ) {
        if($isTextNode(anchorNode)) {
          const parent = anchorNode.getParent();
          if(parent?.isLastChild() && parent.getLastChild() === anchorNode) {
            if(selection.anchor.offset === anchorNode.getTextContentSize()) {
              nextEditor?.editor.update(() => {
                const firstChild = $getRoot().getFirstChild();
                if(firstChild) {
                  e.preventDefault();
                  $setSelection(firstChild.selectStart());
                }
              });
            }
          }
        } else {
          if($isParagraphNode(anchorNode) && root.getLastChild() === anchorNode && anchorNode.__size === selection.anchor.offset) {
            nextEditor?.editor.update(() => {
              const firstChild = $getRoot().getFirstChild()
              if(firstChild) {
                e.preventDefault();
                $setSelection(firstChild.selectStart());
              }
            });
          }
        }
      }
       
    }
    return false;
  }

  const navigateToPreviousEditor = (e : any) => {
      const editors = valuesRef.current?.editors || {};
      const indexMap = valuesRef.current?.indexMap || {};
      const focusedEditor = valuesRef.current?.focusedEditor || null;
      const currentEditor =  editors[focusedEditor || ''] || { index: 0};
      const prevEditor = editors[indexMap[currentEditor?.index - 1] || 0];
      const selection = $getSelection();
      if ( selection !== null && $isRangeSelection(selection) && selection.isCollapsed()) {

        // We have a selection
        const anchorNode = selection.anchor.getNode();
        if (anchorNode !== null ) {
          
          // We have the anchor node
          if(anchorNode.getTextContentSize() ===  0) {

            // We are on the first line at the start
            prevEditor?.editor.update(() => {
              const lastChild = $getRoot().getLastDescendant()
              if(lastChild) {
                  e.preventDefault();
                  $setSelection(lastChild.selectEnd());
              } else {
                e.preventDefault();
                prevEditor?.editor?.focus();
              }
            });
          } else {
            if(selection.anchor.offset === 0 && $getRoot().getFirstChild() === anchorNode || anchorNode.getParent() === $getRoot().getFirstChild()) {

              // We are on the first line and we check wether the anchor node or the parent is the first child of root
              prevEditor?.editor.update(() => {
                const lastChild = $getRoot().getLastDescendant()
                if(lastChild) {
                    e.preventDefault();
                    $setSelection(lastChild?.selectEnd());
                }
              });
            }
          }
        }
      }
      return false;
  }


  useEffect(() => {
  
    editor.registerCommand(KEY_ARROW_DOWN_COMMAND,navigateToNextEditor ,COMMAND_PRIORITY_NORMAL);

    editor.registerCommand(KEY_ARROW_UP_COMMAND, navigateToPreviousEditor ,COMMAND_PRIORITY_NORMAL);

    editor.registerCommand(KEY_ARROW_RIGHT_COMMAND, navigateToNextEditor ,COMMAND_PRIORITY_NORMAL);

    editor.registerCommand(KEY_ARROW_LEFT_COMMAND, navigateToPreviousEditor ,COMMAND_PRIORITY_NORMAL);

  },[editor]);

  useEffect(() => {
    editor.registerCommand(SELECTION_CHANGE_COMMAND, () => {
      changeEditorState(id, {
        editor,
      })

      focusEditor(id);
      return true;
    },COMMAND_PRIORITY_LOW)
  }, [editor]);

  
  return null;
}
