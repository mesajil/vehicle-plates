import {useState, ChangeEvent} from 'react'
import {Row} from '../Containers/Styled'
import {Plate} from '../Containers/Plate'
import examplePlates, {
  Plate as PlateType,
  colors,
} from '../../utils/quickViewPlates'
import TextArea from '../TextArea'

const QuickView = () => {
  const [plates, setPlates] = useState(examplePlates)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = event.target
    const texts = value.toUpperCase().split(',')

    const newPlates: PlateType[] = []
    for (let i = 0; i < texts.length; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      newPlates.push({
        text: texts[i],
        color: i < plates.length ? plates[i].color : randomColor,
      })
    }
    setPlates(newPlates)
  }

  return (
    <>
      <Row>
        <TextArea
          value={plates.map(({text}) => text).join(',')}
          onChange={handleChange}
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
