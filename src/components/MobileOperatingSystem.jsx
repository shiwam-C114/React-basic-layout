import React from 'react'
import Heading from './common/Heading'
import List from './common/List'

export default function Mobile() {
  let data = ["Apple","Blackberry", "Iphone", "Windows Phone"]
  return (
    <div>
      <Heading Heading= "Mobile Operating System" ></Heading>
      <List data ={data} />
    </div>
  )
}
