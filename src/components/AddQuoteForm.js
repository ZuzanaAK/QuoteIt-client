import React from 'react'

function AddQuoteForm(props) {

    //props.onAdd = function
    return (
        <form onSubmit={props.onAdd} >
            <input name="quote" type="text" placeholder="Enter quote"></input>
            <input name="author" type="text" placeholder="Enter author"></input>
            <input name="category" type="text" placeholder="Enter category"></input>
            <input type="file" name="image" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddQuoteForm