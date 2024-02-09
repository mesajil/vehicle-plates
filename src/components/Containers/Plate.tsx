import styled from '@emotion/styled'

interface PlateProps {
  padding?: string
  border?: string
  margin?: string
  backgroundColor?: string
}

export const Plate = styled.div<PlateProps>`
  padding: ${props => props.padding || '5px 6px 2px 6px'};
  border: ${props => props.border || '2px ridge gray'};
  margin: ${props => props.margin || '0'};
  background-color: ${props => props.backgroundColor || 'red'};
  border-radius: 3px;
  font-family: 'LICENSE PLATE USA', sans-serif;
  font-weight: bold;
  text-shadow: 0px 1px 2px #919191;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`
