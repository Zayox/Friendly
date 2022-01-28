import React from 'react';

const Form = (props) => {

    const posts = props.posts;
    const setPost = props.setPost;

    function post(name,age){
        setPost(posts.push({name,age}))
    }


    return (
        <div>
            <form className="flex flex-col w-32">
                <label>Name: </label>
                <input type="text" required className="border border-blue-400"/>
                <label>Age: </label>
                <input type="text" required className="border border-blue-400"/>
                <button className="bg-gradient-to-r from-purple-400 to-orange-400 p-2 rounded text-white" onClick={() => post()}>Post</button>
            </form>
        </div>
    );
};

export default Form;
