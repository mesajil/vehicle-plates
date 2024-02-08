import {useState, ChangeEvent} from 'react'
import {Row} from '../Containers/Styled'
import {Plate} from '../Containers/Plate'
import quickViewText from '../../utils/quickViewPlates'

const QuickView = () => {
  const [text, setText] = useState(quickViewText)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target
    setText(value)
  }

  return (
    <>
      <Row>
        <textarea
          value={text}
          onChange={handleChange}
          rows={7}
          maxLength={300}
          style={{
            width: '100%',
            maxWidth: '50ch',
            resize: 'none',
            fontSize: '24px',
          }}
        />
        <Row flexWrap="wrap">
          {text.split(',').map(textElement => (
            <Plate margin="0 10px">[{textElement.trim()}]</Plate>
          ))}
        </Row>
      </Row>
    </>
  )
}

export default QuickView
