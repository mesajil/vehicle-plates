import React from 'react'
import {Column, Row} from '../Containers'

const QuickView = () => {
  return (
    <>
      <Row>
        <textarea
          // value={text}
          // onChange={handleChange}
          rows={7}
          maxLength={300}
          style={{
            width: '100%',
            maxWidth: '50ch',
            resize: 'none',
            fontSize: '24px',
          }}
        />
        <div>Salida del textarea</div>
      </Row>
    </>
  )
}

export default QuickView
