import React from "react";
import List from "./components/List";
import listSvg from "./assets/img/list.svg";
import AddList from "./components/AddListButton";

import DB from "./assets/db.json"

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              icon: <img src={listSvg} alt="list" />,
              name: 'All ToDos',

            }
          ]} />
        <List items={[
          {
            color: 'green',
            name: 'Purchases'
          },
          {
            color: 'blue',
            name: 'Front-end'
          },
          {
            color: 'pink',
            name: 'Films & Serials'
          },
          /* {
            color: '#B6E6BD',
            name: 'Books'
          },
          {
            color: '#C9D1D3',
            name: 'Private'
          } */
        ]}
          isRemovable={true} />
        <AddList colors={DB.colors} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
