import React from 'react'
import Simple from '../Events/Simple'
import SimpleThreeColumns from '../Events/SimpleThreeColumns'
import SplitWithImage from '../Events/SplitWithImage'

export default function Events() {
  return (
    <div className='events'>
      <SplitWithImage/>
      <SimpleThreeColumns/>
      <Simple/>
    </div>
  )
}

