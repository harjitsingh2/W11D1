import { useState, useEffect } from 'react';

function Form (props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const validates = () => {
        let errors = [];
        if(name.length === 0){
            errors.push("Name cannot be empty");
        }

        // validate email
        let atParts = email.split("@");
        if(atParts.length !== 2) {
            errors.push("Email must contain exactly one @ symbol");
        } else {
            let dotParts = atParts[1].split('.');
            if (dotParts.length !==2) {
                errors.push("Email must contain a valid domain ending. For example: email@domain.com");
            }
        }

        // validate phone number
        let phoneNumberParts = phoneNumber.split('-');
        if (phoneNumberParts.length !==3 || phoneNumberParts[0].length !== 3 || phoneNumberParts[1].length !== 3 || phoneNumberParts[2].length !== 4) {
            errors.push("Invalid format: Phone number must be in xxx-xxx-xxxx format")
        }
        const nums = '0123456789-'
        for(let digit of phoneNumber) {
            if (!nums.includes(digit)) {
                errors.push("Phone number can only contain valid numbers and dashes");
                break;
            }
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
                case "email":
                    setEmail(e.target.value);
                    break;
                case "phoneNumber":
                    setPhoneNumber(e.target.value);
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
                name: name,
                email: email,
                phoneNumber
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
                <br />
                <label>Email
                    <input type="text" placeholder="email@domain.com" value={email} onChange={handleChange("email")}/>
                </label>
                <br />
                <label>Phone Number
                    <input type="text" placeholder="xxx-xxx-xxxx" value={phoneNumber} onChange={handleChange("phoneNumber")}/>
                </label>
                <br />
                <button>Submit</button>
            </form>
            {/* <ShowErrors /> */}
            {/* Above works if we define ShowErrors as a component within Form component, however bad practice. */}
            
            {showErrors()}
        </>
    )
}

export default Form;