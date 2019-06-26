import React from 'react'

const TextBar = () => {
    return (
        <div className="container">
            <div className="input-field">
                <input id="todos" type="text" />
                <label htmlFor="todos">What do you have in mind...</label>
            </div>
            <div className="center input-field">
               <button className="btn teal darken-3">Add Todo</button>
            </div>
        </div>
    )
}

export default TextBar