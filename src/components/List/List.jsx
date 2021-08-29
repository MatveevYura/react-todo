import React from "react";


const List = ({ items }) => {

  return (
    <ul className="list">
      {items.map(item => <li className={item.active ? 'active' : ''}>
        {item.icon ? <i>{item.icon}</i> : <i className="list__dott" style={{ backgroundColor: item.color }}></i>}
        <span>{item.name}</span>
      </li>)
      }
    </ul >
  )
}

export default List