import React from 'react';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { useParams } from 'react-router'
import Comment from './Comment';
import NewComment from './NewComment';

const Comments = ({setUser, user}) => {

    let history = useHistory();
    const params = useParams(); 

    const [post, setPost] = useState([]);
    const [edit, setEdit] = useState(null)

    useEffect(() => {
        fetch(`/posts/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setPost(data)
            console.log(data)
        })
    }, [])

    function editPost(post){
        history.push(`/editpost/${post.id}`)
    }

    function handleDelete(post){
        fetch(`/posts/${post.id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((r) => { 
        if (r.ok) {
        console.log('Item was deleted!')
        history.push('/home')
    }})
    }

    const renderButtons = () => {
        if(post.user){
            if (post.user.id === user.id){
                return <div>
                    <div className='buttons'>
                    <button onClick={() => editPost(post)} >Edit</button>
                    <button onClick= {() => handleDelete(post)}>Delete</button>
                    </div>
                    <h5>- {post.user.name}</h5>
                </div>
            }
            else{
                return <div><h5>- {post.user.name}</h5></div>
            }
        }}

    function logOut() {
        fetch('/logout', {
            method: 'DELETE' })
        .then(r => {
            if (r.ok) {
            setUser(null);
            }
        });
        history.push('/')
        }

    function goDiscussion(){
            history.push('/home')
        }

    let itemsToRender;
    if (post.comments) {
        itemsToRender = post.comments.map((comment) => (
                <Comment 
                    key = {comment.id}
                    comment = {comment}
                    user={user}
                    post={post} />
        ))
    }

    function toPortfolio() {
        history.push('/me')
    }

    return (
        <div className='body'>
        <div className='view-wrapper'>
                <button className='viewing-user' onClick={toPortfolio}>{user.name}</button>
                <button className='logout' onClick = {logOut} >Log Out</button>
        </div>
        <br />
        <h1 className='nba-today'>NBA Today</h1>
        <button onClick = {goDiscussion} >Go to Discussion Board</button>
        <br/>
        <div className="content">
            <ul>
                <h3 className='post-header'>{post.header}</h3>
                <p className='post-body'>{post.body}</p>
                {renderButtons()}
                <hr/>
                <br/>
                <strong>Comments:</strong>
                <br/>
                <br/>
                <div> {itemsToRender}</div>
                <br/>
                <br/>
                <NewComment user={user} setEdit={setEdit} />
            </ul>
        </div>
        </div>

    );
}

export default Comments;