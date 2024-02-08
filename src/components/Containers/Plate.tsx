import styled from '@emotion/styled'

interface PlateProps {
  padding?: string
  border?: string
  margin?: string
}

export const Plate = styled.div<PlateProps>`
  padding: ${props => props.padding || '0'};
  border: ${props => props.border || 'none'};
  margin: ${props => props.margin || '0'};
`
