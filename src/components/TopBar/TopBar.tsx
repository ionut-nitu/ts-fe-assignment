import React from 'react'
import styled from 'styled-components'
import colors from '../../theme/colors'
import {HomeIcon, AdjustmentsHorizontalIcon, ChatBubbleBottomCenterTextIcon, TableCellsIcon, DocumentTextIcon, ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import Button from '../common/Button/Button'

type Props = {}

export default function TopBar({}: Props) {
  return (
    <Wrapper>
      <Left>
        <HomeIcon stroke={colors.zinc[400]} width={16} height={16}/>
          <Title withMargin>/ Projects /</Title>
          <Title active>Home Assignment for Senior FE</Title>
      </Left>
      <Right>
        <Button type="large" active>
          <DocumentTextIcon className='button-icon' width={20} height={20}/>
        </Button>
        <Button type="large">
          <TableCellsIcon className='button-icon' stroke={colors.zinc[400]} width={20} height={20}/>
        </Button>
        <Divider />
        <Button type="large">
          <AdjustmentsHorizontalIcon className='button-icon' stroke={colors.zinc[400]} width={20} height={20}/>
        </Button>
        <Button type="large">
          <ChatBubbleBottomCenterTextIcon className='button-icon' stroke={colors.zinc[400]} width={20} height={20}/>
        </Button>
        <Button type="large">
          <ArrowDownTrayIcon className='button-icon' stroke={colors.zinc[400]} width={20} height={20} style={{transform: 'rotate(-90deg)'}}/>
        </Button>
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height:56px;
  display:flex;
  position: fixed;
  width:100%;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #18181B;
  z-index: 1;
  border-bottom: 1px solid ${colors.zinc[750]};

`

const Divider = styled.div`
  height:24px;
  width:1px;
  background-color: ${colors.zinc[700]};
`;
const Left = styled.div`
  display:flex;
`;


const Right = styled.div`
  display:flex;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div<{active?: boolean; withMargin?:boolean}>`
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.zinc[400]};
  ${props => props.active && `

    color: ${colors.zinc[50]};
  `}
  ${props => props.withMargin && `
    margin: 0px 10px;
  `}
`;