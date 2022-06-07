import React from 'react'

export default function List(props) {
  return (
    <div>{props.data.map(e=>
    <li>{e}</li>
    )}</div>
  )
}
