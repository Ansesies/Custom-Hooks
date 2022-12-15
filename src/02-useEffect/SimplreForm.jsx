import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimplreForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'andres@google.com'
    });

    const {username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect( () =>{
        //console.log('useEffect llamado')
    }, []);

    useEffect( () =>{
        //console.log('formState cambiado')
    }, [formState]);

    useEffect( () =>{
        //console.log('emil cambiado')
    }, [email]);

    
    


  return (
    <>
        <h1>Simplre Form</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={onInputChange}
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="andres@google.com"
            name="email"
            value={ email }
            onChange={onInputChange}
        />
    

        {
            (username === 'strider2' ) && <Message/>

        }   
    </>
  )
}
