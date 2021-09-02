import React, { useState } from "react";
import List from '../List'
import plusSvg from "../../assets/img/add.svg";
import Badge from '../Badge'

import closeSvg from "../../assets/img/close.svg";


import './AddListButton.scss'

const AddListButton = ({ colors, onAdd }) => {

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectedColor, selectColor] = useState(colors[0].id)
  const [inputValue, setInputValue] = useState('')

  const onClose = () => {
    setVisiblePopup(false)
    setInputValue('')
    selectColor(colors[0].id)
  }

  const addList = () => {
    if (!inputValue) {
      alert('Veedite nazvanie')
      return
    }
    const color = colors.filter(c => c.id === selectedColor)[0].name
    onAdd({ id: Math.random(), name: inputValue, color })
    onClose()
  }

  return (

    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-button",
            icon: <img src={plusSvg} alt="list" />,
            name: 'Add folder'
          }
        ]} />
      {visiblePopup && (
        <div className="add-list__popup">
          <img onClick={onClose} src={closeSvg} alt="close btn" className="add-list__popup-close-btn" />

          <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="field" type="text" placeholder="Folder name" />
          <div className="add-list__popup-colors">
            {
              colors.map(color =>
                <Badge onClick={() => selectColor(color.id)}
                  key={color.id}
                  color={color.name}
                  className={selectedColor === color.id && 'active'} />)
            }
          </div>
          <button onClick={addList} className="button">Add</button>
        </div>)}
    </div>
  )
}

export default AddListButton