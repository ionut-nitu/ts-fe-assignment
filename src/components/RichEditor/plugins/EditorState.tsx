
import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $insertNodes,} from "lexical";
import { useEffect } from "react";

type Props = {
  initialState: string;
};

export default function EditorState({ initialState }: Props) {
  const [editor] = useLexicalComposerContext();

 useEffect(() => {
  editor.update(() => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(initialState, "text/html");
    const nodes = $generateNodesFromDOM(editor, dom);

    $getRoot().select();
    $insertNodes(nodes);
  });
 },[])
  return null;
}
