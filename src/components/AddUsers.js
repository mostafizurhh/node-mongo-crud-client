import React from 'react';
import { useState } from 'react';

const AddUsers = () => {
    const [user, setuser] = useState({})
    const handleSubmit = event => {
        event.preventDefault();
        console.log(user)

        /* send data to server side */
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('data inserted successfully');
                    event.target.reset();
                }
                console.log(data)
            })
            .catch(error => console.error(error))
    }

    const handleInputBlur = event => {
        const field = event.target.name
        const value = event.target.value
        const newUser = { ...user }
        newUser[field] = value
        setuser(newUser)
    }

    return (
        <div>
            <h2>This is User</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputBlur} type="text" name='name' placeholder='your name' /> <br /> <br />
                <input onChange={handleInputBlur} type="text" name='address' placeholder='your address' /> <br /> <br />
                <input onChange={handleInputBlur} type="email" name='email' placeholder='your email' /> <br /> <br />
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddUsers;