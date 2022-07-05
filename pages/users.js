import React from 'react'
import User from '../components/user';

function UserList({ userList }) {
    console.log("userList", userList)
    return (
        <div>
            <h4>List of users</h4>
            {userList.map((item, index) => (
                <div key={index}>
                    <User user={item} />
                </div>
            ))}
        </div>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            userList: data
        }
    }
}
