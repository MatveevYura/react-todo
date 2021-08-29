import React from "react";
import List from "./components/List/List.jsx";
import listSvg from "./assets/img/list.svg";

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: <img src={listSvg} alt="list" />,
            name: 'All ToDos',
            active: true
          }
        ]} />
        <List items={[
          {
            color: '#42B883',
            name: 'Purchases'
          },
          {
            color: '#64C4ED',
            name: 'Front-end'
          },
          {
            color: '#FFBBCC',
            name: 'Films & Serials'
          },
          {
            color: '#B6E6BD',
            name: 'Books'
          },
          {
            color: '#C9D1D3',
            name: 'Private'
          }
        ]} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
