import React from "react";
import classNames from "classnames";
import axios from 'axios';

import removeSvg from "../../assets/img/remove.svg";

import Badge from '../Badge/'


const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm('Are you sure?')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
        onRemove(item.id);
      });
    }
  }
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => <li key={index} className={classNames(item.className, { 'active': item.active })}>
        {item.icon ? <i>{item.icon}</i> : (<Badge color={item.color.name} />)}
        <span>{item.name}</span>
        {isRemovable && <img onClick={() => removeList(item)} className="list__remove-icon" src={removeSvg} alt="remove" />}
      </li>)
      }
    </ul >
  )
}

export default List