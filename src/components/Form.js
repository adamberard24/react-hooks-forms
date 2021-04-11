import React from "react"

function Form(props) {
    return (
        <form>
            <input
            type="text"
            onChange={props.handleLastNameChange}
            value={props.firstName}
            />
        
        <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
        />
        </form>
    )
}

export default Form