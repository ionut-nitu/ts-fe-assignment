import { LexicalEditor } from 'lexical'
import { create } from 'zustand'
export interface Editor {
    editor: LexicalEditor,
    index: number;
}
interface State {
  focusedEditor: string | null;
  editors: {
    [key:string]: Editor
  }
  registerEditor: (id:string, editor: LexicalEditor, index:number) => void;
  changeEditorState: (id:string, newState: Partial<Editor>) => void;
  indexMap: {
    [key: number]: string;
  }
  focusEditor: (id:string) => void;
}
export const useEditorsState = create<State>((set) => ({
  editors: {},
  indexMap: {},
  focusedEditor: null,
  registerEditor: (id: string, editor: LexicalEditor, index: number) => set((state: State) => ({
    indexMap: {
      ...state.indexMap,
      [index]: id
    },
    editors: {
      ...state.editors, 
      [id]: {
       editor,
       index
    }}
  })),
  changeEditorState: (id:string, newState: Partial<Editor>) => set((state: State) =>({
    editors: {
      ...state.editors,
      [id]: {
        ...state.editors[id],
        ...newState
      }
    }
  })),
  focusEditor: (id:string) => set(() => ({
    focusedEditor: id
  }))
}))