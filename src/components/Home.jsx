import React, {useState} from 'react';
import Posts from "./Posts";
import Create from "./Create";

const Home = () => {

    const [posts,setPost] = useState([
        {name: "Benzema", age:32, id:1},
        {name: "Billie Eilish", age:19, id:2},
        {name: "Limontez", age:25, id:3}
    ]);


    return (
        <div>
            <Posts posts={posts} setPost={setPost}/>
            <Create posts={posts} setPost={setPost}/>
        </div>
    );
};

export default Home;
