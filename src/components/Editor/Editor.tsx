import React from "react";
import RichEditor from "../RichEditor/RichEditor";
import styled from "styled-components";

import details, { MockData } from "../../data"
import colors from "../../theme/colors";
import { useEditorsState } from "../../store/store";

export default function AssignmentDescription() {

  let index = 0;
  const { focusedEditor } = useEditorsState();
  return (
    <Wrapper>
      {details.map((detail: MockData, index1:number) => (
        <EditorWrapper key={detail.id} active={focusedEditor?.includes(detail.id)}> 
          {Object.keys(detail.fields).map((key: string, index2: number) => (
            <RichEditor
              id={detail.id+key}
              key={key}
              heading={key === 'heading'}
              index={index++}
              placeholder="Hello there!"
              initialState={detail.fields[(key as 'heading' | 'text' | 'question')]}
            />
          ))}
        </EditorWrapper>
      ))}
    </Wrapper>
  
  );
}
const Wrapper = styled.div`

`;


const EditorWrapper = styled.div<{active?:boolean}>`
  width: fit-content;
  padding:20px;
  border-radius:4px;
  border: 2px solid transparent;
  ${props => props.active && `
    border: 2px solid ${colors.purple[1000]};
    background: ${colors.highlight};
  `}
`;
