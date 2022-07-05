import React from 'react'

function User({ user }) {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
        </div>
    )
}

export default User