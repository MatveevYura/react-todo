import React, { useEffect, useState } from "react";
import List from '../List'
import plusSvg from "../../assets/img/add.svg";
import Badge from '../Badge'
import axios from 'axios';

import closeSvg from "../../assets/img/close.svg";


import './AddList.scss'

const AddList = ({ colors, onAdd }) => {

  const [visiblePopup, setVisiblePopup] = useState(false)
  const [seletedColor, selectColor] = useState(3);
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id)
    }
  }, [colors])

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
    setIsLoading(true);
    axios
      .post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: seletedColor
      })
      .then(({ data }) => {
        const color = colors.filter(c => c.id === seletedColor)[0];
        const listObj = { ...data, color, tasks: [] };
        onAdd(listObj);
        onClose();
      })
      .catch(() => {
        alert('Ошибка при добавлении списка')
      })
      .finally(() => {
        setIsLoading(false);
      });
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
                  className={seletedColor === color.id && 'active'} />)
            }
          </div>
          <button onClick={addList} className="button"> {isLoading ? 'Добавление...' : 'Добавить'}</button>
        </div>)}
    </div>
  )
}

export default AddList