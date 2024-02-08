import styled from '@emotion/styled'

interface BoxProps {
  maxWidth?: string
  flexWrap?: string
}

const Box = styled.div<BoxProps>`
  display: flex;
  max-width: ${props => props.maxWidth || 'none'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`

export const Row = styled(Box)<BoxProps>`
  flex-direction: row;
  align-items: center;
`

export const Column = styled(Box)<BoxProps>`
  flex-direction: column;
  align-items: center;
`
