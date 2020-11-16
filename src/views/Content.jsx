import React, {useState} from 'react'
import SideMenu from '../components/ContentSideMenu'
import ContentCard from '../components/ContentCard'
import {content} from '../data/content'

export default function Content() {

  const selectedContent = global.history.state.state.selectedContent;

  const [selected, setSelected] = useState(
    selectedContent ? 
    content.filter(c => {
      return c.title.name === selectedContent;
    })[0] 
    : content[0]);

  const title = content.map(contentTitle => {
    return contentTitle.title;
  });

  const onChangeSelected = (changeSelected) => {
    const contentSelected = content.filter(c => {
      return c.title.name === changeSelected;
    })[0] 
    setSelected(contentSelected);
  }

  return (
    <div className='container'>
      <div className='row'>
        <span className='col-md-2'>
          <SideMenu 
            title={title} 
            onSelectContent={onChangeSelected} />
        </span>
        <span className='col-md-10'>
          <ContentCard content={selected} />
        </span>
      </div>
    </div>
  )
}
