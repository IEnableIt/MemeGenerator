import React, { useContext } from 'react'
import { MemeContext } from '../../../context/MemeContext'
import TextWrapper from './TextWrapper'
import TextLegenda from './TextLegenda'
import Title from '../../global/Title'
import WrapInput from '../../global/form/WrapInput'
import Label from '../../global/form/Label'
import Input from '../../global/form/Input'
import Range from '../../global/form/Range'
import Switch from '../../global/form/Switch'

const TextImage = () => {
  // Global state
  // state to read and dispatch to modify
  const meme = useContext(MemeContext)

  const handleTopText = (e) => {
    meme.dispatch({ type: 'UPDATE_TOP', payload: e.target.value })
  }

  const handleBottomText = (e) => {
    meme.dispatch({ type: 'UPDATE_BOTTOM', payload: e.target.value })
  }

  // Render
  return (
    <TextWrapper className={meme.state.imageSelected ? 'active' : ''}>
      <Title as='h3' fsize='1.5' margin='0 0 1rem'>
        Set your text here
      </Title>

      {/* Top Text */}
      <WrapInput>
        <Label primary htmlFor='text-top'>
          Top text
        </Label>
        <Input
          intype='text'
          id='text-top'
          onChange={handleTopText}
          value={meme.state.topText}
          disabled={!meme.state.imageSelected}
        />
      </WrapInput>

      <TextLegenda>* Both of the above texts are optional.</TextLegenda>
    </TextWrapper>
  )
}

export default TextImage
