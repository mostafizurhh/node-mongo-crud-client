import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    /* display data to UI from DB/server API */
    const users = useLoaderData()
    const [displayUsers, setDisplayUsers] = useState(users)

    /* delete a data from client side, server side and DB. and update UI instantly */
    const handleDlete = user => {
        const agree = window.confirm(`Are you sure you want to delete ${user.name}`)
        if (agree) {
            // console.log('deleting user with id', user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user deleted successfully');
                        const remaining = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remaining);
                    }
                })
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <h2>Users: {displayUsers.length}</h2>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        {user.name}: {user.email}
                        <Link to={`/update/ ${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDlete(user)}><small>x</small></button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;