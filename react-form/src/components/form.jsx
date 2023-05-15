import { useState, useEffect } from 'react';

function Form (props) {
    const [name, setName] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const validates = () => {
        let errors = [];
        if(name.length === 0){
            errors.push("Name cannot be empty");
        }
        return errors
        // setErrorMessages(errors);
    }

    const handleChange = field => {
        return (e) => {
            switch(field){
                case "name":
                    setName(e.target.value);
                    break;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validates();

        if(errors.length > 0){
            setErrorMessages(errors);
        } else {
            let user = {
                name
            };
            console.log(user);
        }

    }

    const showErrors = () => {
        if(errorMessages.length > 0){
            return (
                <ul>
                    {errorMessages.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </ul>
            )
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" placeholder="Name" value={name} onChange={handleChange("name")}/>
                    {/* <input type="text" placeholder="Name" value={name} /> */}
                </label>
                <button>Submit</button>
            </form>
            {/* <ShowErrors /> */}
            {/* Above works if we define ShowErrors as a component within Form component, however bad practice. */}
            
            {showErrors()}
        </>
    )
}

export default Form;