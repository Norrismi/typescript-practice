import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props ["people"]>>
    people: Props["people"]
}



const Input: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        note: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = ():void => {
      if( !input.name || !input.name || !input.name ){return}

      setPeople([
        ...people,
       {
        name: input.name,
        age: parseInt(input.age),
        note: input.note
       }
      ]);
      setInput({
        name: '',
        age: '',
        note: ''
      })
    }


    return (
        <div className="flex flex-col w-4/12 mx-auto pt-20 ">
            <input type="text" placeholder='Name' className="m-2 rounded-sm p-2" value={input.name} onChange={handleChange} name='name' />
            <input type="number" placeholder='Age' className="m-2 rounded-sm p-2" value={input.age} onChange={handleChange} name='age' />
            {/* <input type="text" placeholder='Image URL' className="m-2 rounded-sm p-2" value={input.note} /> */}
            <textarea rows={2} placeholder='Notes' className="m-2 rounded-sm p-2" value={input.note} onChange={handleChange} name='note' />
            <button onClick={handleClick} className="bg-green-500 w-10/12 mx-auto rounded-sm p-2">Add to List</button>

        </div>
    )
}

export default Input