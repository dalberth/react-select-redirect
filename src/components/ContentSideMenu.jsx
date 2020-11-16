import React from 'react'

export default function ContentSideMenu(props) {

  const {title, onSelectContent} = props;

  const handleSelected = (selected) => {
    onSelectContent(selected.target.innerHTML);
  }

  return (
    <>
      {title.map((title) => {
        return( 
          <div key={title.name} style={{background:title.color}} onClick={handleSelected}>
            {title.name}
          </div>
        )
      })}
    </>
  )
}
