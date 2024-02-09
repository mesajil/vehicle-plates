import styled from '@emotion/styled'
import {ChangeEvent} from 'react'

const TextArea = ({
  value,
  onChange,
}: {
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}) => {
  return (
    <TextAreaStyled
      value={value}
      onChange={onChange}
      rows={10}
      maxLength={500}
    />
  )
}

const TextAreaStyled = styled.textarea`
  width: 35%;
  resize: none;
  font-size: 24px;
`

export default TextArea
