import React, { useState } from 'react'

function Comments() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({ id: Date.now(), comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log("Data", data)
    }
    return (
        <div>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load comments</button>
            {comments.map((comment) => (
                <div key={comment.id}>
                    {comment.id} {comment.text}
                </div>
            ))}
        </div>
    )
}

export default Comments