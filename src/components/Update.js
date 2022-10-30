import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData()
    const [user, setuser] = useState(storedUser)
    const handleSubmit = event => {
        event.preventDefault();
        console.log(user)
    }

    const handleInputChange = event => {
        const field = event.target.name
        const value = event.target.value
        const newUser = { ...user }
        newUser[field] = value
        setuser(newUser)
    }
    return (
        <div>
            <h2>Update info for: {storedUser.name} </h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='your name' /> <br /> <br />
                <input onChange={handleInputChange} defaultValue={storedUser.address} type="text" name='address' placeholder='your address' /> <br /> <br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" name='email' placeholder='your email' /> <br /> <br />
                <button type='submit'>Update</button>
            </form>
        </div>
    );
};

export default Update;