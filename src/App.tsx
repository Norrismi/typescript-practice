import React, { useState } from 'react';
import './App.css';
import List from './components/List'

import Input from './components/Input';

export interface IState{
  people:{
    name: string;
    age: number;
    note: string
  }[]
}


function App() {

  //usually we don't define a complicated state inside the brackets, this is why we use Interfaces
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Sam Bankman-Fried",
      age: 37,
      note: 'played for Miami',
    },
    {
      name: "Elon Musk",
      age: 47,
      note: 'Mad Inventor',
    },
    {
      name: "Dwayne Wade",
      age: 52,
      note: 'B-baller',
    }
  ])


  return (
    <div className="bg-gray-700 min-h-screen p-20 ">
      <h1 className="flex justify-center text-[40px] font-bold text-white pt-10">People Invited To the Party!</h1>
   
      <List people={people}/>
      <Input people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
