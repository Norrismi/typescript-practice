import React from 'react'

const Input = () => {
    return (
        <div className="flex flex-col w-4/12 mx-auto pt-20 ">
            <input type="text" className="m-2 rounded-sm " />
            <input type="text" className="m-2 rounded-sm" />
            <input type="text" className="m-2 rounded-sm" />
            <input type="text" className="m-2 rounded-sm" />
            <button className="bg-green-500 w-10/12 mx-auto rounded-sm">Add to List</button>
            
        </div>
    )
}

export default Input