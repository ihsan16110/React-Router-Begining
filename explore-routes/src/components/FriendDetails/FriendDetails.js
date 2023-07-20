import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div>
            <h1>Friends Details About: {friend.name} </h1>
            <p>Call him one her/her: {friend.phone}</p>
            <h2>Everything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetails;