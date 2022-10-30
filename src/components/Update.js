import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            <h2>Update info for: {user.name} </h2>
        </div>
    );
};

export default Update;