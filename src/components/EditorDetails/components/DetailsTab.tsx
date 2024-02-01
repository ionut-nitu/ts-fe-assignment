import React from 'react'
import { dateFormat } from '../../../utils/dateHelper'
import dayjs from 'dayjs'
import styled from 'styled-components'
import colors from '../../../theme/colors'

type Props = {
  data:any
}

export default function DetailsTab({data}: Props) {
  return (
    <>
      <Section>
        <Row>
          <Label>
            ID
          </Label>
          <Value>
            {data.id}
          </Value>
        </Row>
        <Row>
          <Label>
            Created
          </Label>
          <Value>
          {dayjs(data.createdAt).format(dateFormat)}
          </Value>
        </Row>
        <Row>
          <Label>
            Last edit
          </Label>
          <Value>
            {dayjs(data.lastModifiedAt).format(dateFormat)}
          </Value>
        </Row>
      </Section>

      <Section>
        <Title>Attributes</Title>
        <Row>
          <Label>Question</Label>
          <Border>
            <Value>{(data?.fields?.question || '').replace(/(<([^>]+)>)/gi, '')}</Value>
          </Border>
        </Row>
      </Section>
    </>

  )
}

const Label = styled.div`
  color: ${colors.zinc[400]};
  font-family: Inter;
  font-size: 13px;
  width:100px;

`;

const Row = styled.div`
  display:flex; 
  height: 32px;
  align-items: center;
`;

const Border = styled.div`
  padding: 7px 8px;
  border: 1px solid ${colors.zinc[700]};
  border-radius: 4px;
  min-width: 220px;
`;

const Value = styled.div`
  font-family: Inter;
  font-size: 13px;
`;

const Section = styled.div`
  display:flex;
  gap:8px;
  padding: 24px 0px;
  flex-direction: column;
  border-bottom: 1px solid ${colors.zinc[750]};
`;

const Title = styled.div`
  color: ${colors.zinc[400]};
  font-size: 15px;
  font-family: Inter;
  font-weight: 900;
`;