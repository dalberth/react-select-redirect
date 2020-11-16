import React from 'react'

export default function ContentCard(props) {
  
  const content = props.content;
  
  return (
    <div style={{background:content.title.color}}>
      <h3>{content.title.name}</h3>
      <p>{content.content}</p>
    </div>
  )
}
