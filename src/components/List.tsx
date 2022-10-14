import React from 'react'
import sbf from '../assets/sbf.jpg'
import musk from '../assets/musk.jpg'
import dw from '../assets/dw.jpg'
import Input from '../components/Input'

interface IProps {
    people: {
        name: string;

        age: number;
        note: string
    }[]
}


const List: React.FC<IProps> = ({ people }) => {


    const renderList = () => (
        people.map(person =>
            <div className="  bg-white justify-around mx-auto w-9/12 rounded-lg p-4 mt-4">
                <div key={person.name} className="flex flex-row justify-around">
                    <div className="grid">
                        <img className='h-40 rounded-full  mx-auto pb-2' src={sbf} alt='sbf' />
                        <div className="place-self-center">{person.name}</div>
                    </div>
                    <div className="self-center">Age: {person.age}</div>
                    <div className="self-center">{person.note}</div>
                </div>
            </div>
        )
    )


    return (
        <>
            {renderList()}
            <Input/>

        </>
    )
}

export default List