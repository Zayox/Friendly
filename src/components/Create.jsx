import React from 'react';
import Form from "./Form";

const Create = (props) => {

    const posts = props.posts;
    const setPost = props.setPost;


    return (
        <div>
           <Form posts={posts} setPost={setPost} />
        </div>
    );
};

export default Create;