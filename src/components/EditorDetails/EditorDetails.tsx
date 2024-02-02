import {  useState } from 'react'
import styled from "styled-components";
import colors from '../../theme/colors';
import Tabs from '../common/Tabs/Tabs';
import DetailsTab from './components/DetailsTab';
import {  MockData } from '../../data';
type Props = {
  data?: MockData;
}

export enum TabTypes {
  details = 'Details',
  comments = 'Comments & Reviews',
  history = 'History'

}

export default function EditorDetails({data}: Props) {
  const [activeTab, setActiveTab] = useState(TabTypes.details);

  return (
    <Wrapper>
      {
        data && 
        <Content>
          <Tabs tabs={Object.values(TabTypes)} 
            active={activeTab} 
            onChange={(tab: TabTypes) => setActiveTab(tab)}>
              {activeTab === TabTypes.details && <DetailsTab data={data} />}
              {activeTab === TabTypes.comments && null}
              {activeTab === TabTypes.history && null}
          </Tabs>

        
        </Content>
    }
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 400px;
  display:flex;
`;

const Content = styled.div`
  position: fixed;
  top: 76px;
  background-color: ${colors.zinc[950]};
  width: 400px;
  flex:1;
  height:calc(100% - 94px);
  border: 1px solid ${colors.zinc[750]};
  border-radius:5px;
`;