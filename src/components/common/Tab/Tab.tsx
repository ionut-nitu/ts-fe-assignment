import React from 'react'
import styled from 'styled-components';
import colors from '../../../theme/colors';

type Props = {
  children: React.ReactNode;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default function Tab({children, active, onClick}: Props) {
  return (
    <Wrapper onClick={onClick} active={active}>{children}</Wrapper>
  )
}

const Wrapper = styled.div<{active?:boolean}>`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  padding:12px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  ${props => props.active && `
    
    border-bottom: 3px solid ${colors.purple[400]};

  `}
`;