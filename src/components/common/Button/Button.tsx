import React from 'react'
import styled from 'styled-components';
import colors from '../../../theme/colors';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'small' | 'large'
  active?: boolean;
}

export default function Button({children, onClick, type, active}: Props) {
  return (
    <ButtonWrapper type={type} active={active} onClick={onClick}>{children}</ButtonWrapper>
  )
}
const ButtonWrapper = styled.div<{type?: 'small' | 'large', active?: boolean}>`
  cursor: pointer;
  ${props => props.active && `
    .button-icon {
      stroke: ${colors.white.default};
    }; 
    background-color: ${colors.purple[1000]};

  `}
  &:hover {
    .button-icon {
      stroke: ${colors.white.default};
    }; 
    background-color: ${colors.purple[1000]};
  };
  width: ${props => props.type === 'large'? '35px': '26px'};
  height: ${props => props.type === 'large'? '35px': '26px'};
  border-radius:16px;
  display:flex;
  align-items: center;
  justify-content: center;
`;
