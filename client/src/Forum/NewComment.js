import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router'
import { useHistory } from 'react-router';

const Newcomment = ({user}) => {
    const params = useParams(); 
    let history = useHistory();

    const [newComment, setNewComment] = useState('')

    function handleNewComment(e){
        setNewComment(e.target.value) 
    }

    function handleSubmit(e){
        e.preventDefault();
        const commentData = {name: user.name, comment: newComment, user_id: user.id}
        console.log(commentData)
        fetch(`/posts/${params.id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
        .then(r => r.json())
        .then(setNewComment)
        .catch((err) => console.log('error'))
        history.push(`/post/${params.id}`)
    }

    function cancelComment(){
        history.push('/home')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <textarea className='inputarea' placeholder="Add comment here..." onChange={handleNewComment} />
                <div>
                    <input type="submit" value="Post"/>
                    <button onClick={cancelComment} >Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Newcomment;
