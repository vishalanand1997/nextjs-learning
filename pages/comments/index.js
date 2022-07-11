import React, { useState } from 'react'

function Comments() {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }
    return (
        <div>
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