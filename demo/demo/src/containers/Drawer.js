import React from 'react'
import Home from '../components'
import { createProvider } from 'refunk'
import {
  Drawer,
  Heading,
  Fixed,
  Pre,
  Button,
} from 'rebass'

const hoc = createProvider({ open: false })
const toggle = state => ({ open: !state.open })
const Live = hoc(props => (
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
    <Pre>{props.open ? 'Open' : 'Closed'}</Pre>
    <Drawer
      open={props.open}
      position={props.position}
      color='white'
      bg='black'>
      <h1>Hello</h1>
    </Drawer>
  </div>
))

export default Live;
