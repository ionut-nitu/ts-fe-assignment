import "./styles.css";

import AssignmentDescription from "./components/Editor/Editor";
import EditorDetails from "./components/EditorDetails/EditorDetails";
import styled from "styled-components";
import TopBar from "./components/TopBar/TopBar";
import { useEditorsState } from "./store/store";
import details from './data';

export default function App() {
  const {focusedEditor} = useEditorsState();
  const focusedDetails = details.find(item => focusedEditor?.includes(item.id));
  return (
    <div >
      <TopBar />
      <Content>
        <EditorWrapper>
          <AssignmentDescription />
        </EditorWrapper>
        <EditorDetails data={focusedDetails} />
      </Content>
    </div>
  );
}


const Content = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: space-between;
  padding:16px;
`;
const EditorWrapper = styled.div`
  flex:1;
  display:flex;
  margin-top: 60px;
  justify-content: center;
`;