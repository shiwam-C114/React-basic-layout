import React from 'react'
import Heading from './common/Heading'
import List from './common/List'

export default function Manufracturer() {
    let data = ["Samsung","HTC","Micromax", "Apple"]
    return (
    <div>
        <Heading Heading="Mobile Manufacturers" />
        <List data={data}/>
    </div>
  )
}
