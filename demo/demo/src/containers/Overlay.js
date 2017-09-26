import React from 'react'
import { storiesOf } from '@storybook/react'
import { createProvider } from 'refunk'
import {
  Overlay,
  Heading,
  Fixed,
  Pre,
  Button
} from 'rebass'

const hoc = createProvider({ open: true })
const toggle = state => ({ open: !state.open })

const overlay = hoc(props => (
  <div>
    {props.open && (
      <Fixed
        top
        right
        bottom
        left
        onClick={e => props.update(toggle)}
      />
    )}
    <Button
      onClick={e => props.update(toggle)}
      children='Open'
    />
    <Overlay w={256}>
      <Heading>Hello</Heading>
    </Overlay>
  </div>
))
storiesOf('Overlay', module)
  .add('Default', () => (
    <Overlay>
      Hello
    </Overlay>
  ))

export default overlay;
