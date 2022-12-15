import React from 'react'
import Simple from '../NationalPen/Simple'
import SimpleThreeColumns from '../NationalPen/SimpleThreeColumns'
import SplitWithImage from '../NationalPen/SplitWithImage'

export default function NationalPen() {
  return (
    <div className='nationalPen'>
      <SplitWithImage/>
      <SimpleThreeColumns/>
      <Simple/>
    </div>
  )
}

