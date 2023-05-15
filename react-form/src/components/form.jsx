import { useState, useEffect } from 'react';

function Form (props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" placeholder="Name" value=""/>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;