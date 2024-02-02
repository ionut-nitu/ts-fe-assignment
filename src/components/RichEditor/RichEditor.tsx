import React, {  useEffect, useRef } from "react";
import {
  EditorState,
  SerializedEditorState,
} from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import MyCustomAutoFocusPlugin from "./plugins/AutoFocus";
import EditorStatePlugin from "./plugins/EditorState";

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

function onError(error: any) {
  console.error(error);
}

type Props = {
  placeholder?: string;
  id:string;
  initialState?: string;
  index: number;
  heading?: boolean;
  isLast?: boolean;
};

export default function RichEditor({ placeholder,id, initialState, isLast, index, heading }: Props) {

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  }; 
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className={`editor-input ${heading && 'editor-input-heading'}`} />}
          placeholder={
            <div className="editor-placeholder">
              {placeholder || "Enter some text"}
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin id={id} index={index}/>
        <EditorStatePlugin initialState={initialState || ""} />
      </div>
    </LexicalComposer>
  );
}
