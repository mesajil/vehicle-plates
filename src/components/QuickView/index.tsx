import {useState, ChangeEvent} from 'react'
import {Row} from '../Containers/Styled'
import {Plate} from '../Containers/Plate'
import examplePlates, {
  Plate as PlateType,
  colors,
} from '../../utils/quickViewPlates'

const QuickView = () => {
  const [plates, setPlates] = useState(examplePlates)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target
    const texts = value.toUpperCase().split(',')

    if (texts.length === plates.length) {
      // Update text of the last element
      const newPlate = {
        text: texts[texts.length - 1],
        color: plates[plates.length - 1].color,
      }
      setPlates([...plates.slice(0, -1), newPlate])
    } else if (texts.length < plates.length) {
      const slice = plates.slice(0, -1)
      const newPlate = {
        text: texts[texts.length - 1],
        color: slice[slice.length - 1].color,
      }
      setPlates([...slice.slice(0, -1), newPlate])
    } else {
      const newPlate: PlateType = {
        text: texts[texts.length - 1],
        color: colors[Math.floor(Math.random() * colors.length)],
      }
      setPlates([...plates, newPlate])
    }
  }

  return (
    <>
      <Row>
        <textarea
          value={plates.map(({text}) => text).join(',')}
          onChange={handleChange}
          rows={7}
          maxLength={300}
          style={{
            width: '100%',
            maxWidth: '50ch',
            resize: 'none',
            fontSize: '12px',
          }}
        />
        <Row flexWrap="wrap">
          {plates.map(({text, color}) => (
            <Plate margin="5px 7px" backgroundColor={color}>
              {text.trim()}
            </Plate>
          ))}
        </Row>
      </Row>
    </>
  )
}

export default QuickView
