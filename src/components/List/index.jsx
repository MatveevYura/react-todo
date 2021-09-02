import React from "react";
import classNames from "classnames";

import removeSvg from "../../assets/img/remove.svg";

import Badge from '../Badge/'


const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm('Are you sure?')) {
      onRemove(item)
    }
  }
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => <li key={index} className={classNames(item.className, { 'active': item.active })}>
        {item.icon ? <i>{item.icon}</i> : (<Badge color={item.color} />)}
        <span>{item.name}</span>
        {isRemovable && <img onClick={() => removeList(item)} className="list__remove-icon" src={removeSvg} alt="remove" />}
      </li>)
      }
    </ul >
  )
}

export default List