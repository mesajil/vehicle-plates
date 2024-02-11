import styled from '@emotion/styled'

interface PlateProps {
  padding?: string
  border?: string
  margin?: string
  backgroundColor?: string
}

export const Plate = styled.div<PlateProps>`
  padding: ${props => props.padding || '4px 12px 0px 12px'};
  border: ${props => props.border || '3px ridge gray'};
  border-radius: 7px;
  margin: ${props => props.margin || '0'};
  background-color: ${props => props.backgroundColor || 'red'};
  background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');
  font-family: 'LICENSE PLATE USA', sans-serif;
  font-weight: bold;
  text-shadow: 0px 1px 2px #919191;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`
