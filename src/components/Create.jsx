import React from 'react';
import '../Create.css';
import Post from '../components/Posts';

const Create = () => {
    return (
        <div>
            <h1 className="postTitle">Wanna post something?</h1>
            <form className="form">
                <label>Name: </label>
                <input type="text" required/>
                <label>Age: </label>
                <input type="text" required/>
                <label>Say what you wanna say: </label>
                <textarea required></textarea>
                <button className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};

export default Create;