import React, { useState } from 'react'
import Tab from '../Tab/Tab';
import styled from 'styled-components';
import { TabTypes } from '../../EditorDetails/EditorDetails';
import colors from '../../../theme/colors';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../Button/Button';

type Props = {
  children: React.ReactNode;
  tabs: TabTypes[]
  active: string;
  onChange: (tab: TabTypes) => void;
}

export default function Tabs({tabs, active,children, onChange}: Props): JSX.Element {
  return (
    <Wrapper>
      <Header>

      <TabsContainer>
        {tabs.map(tab => <Tab key={tab} active={active === tab} onClick={() => onChange(tab)}>{tab}</Tab>)}
      </TabsContainer>
      <Button>
        <XMarkIcon className='button-icon' stroke={colors.zinc[400]} width={16} height={16} style={{justifySelf:'flex-end'}}/>
      </Button>
      </Header>
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
`;


const Header = styled.div`
  display:flex;
  padding:0px 20px;
  border-bottom: 1px solid ${colors.zinc[750]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TabsContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;

`;

const Content = styled.div`
  padding:24px;
`;