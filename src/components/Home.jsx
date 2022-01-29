import React, {useState} from 'react';
import Posts from "./Posts";

const Home = () => {

    const [posts,setPost] = useState([
        {name: "Benzema", txt:"I'm the best stricker in the world I swear", id:1},
        {name: "Billie Eilish", txt:"boring time...", id:2},
        {name: "Limontez", txt:"Hello I'm Limontez", id:3}
    ]);


    let length = posts.length;
    let name;
    let txt;

    function setId(){
        if(length===0){
            return 1;
        }
        else{
            return posts[length-1].id+1;
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div>
            <div className="flex justify-center mt-16">
                <form className="flex flex-col w-[30vw]" onSubmit={handleSubmit.bind(this)}>
                    <label>Name: </label>
                    <input type="text" required className="border border-blue-400 rounded-md mt-4 p-2 w-[30%]" onChange={(e) => name=e.target.value}/>
                    <label className="mt-4">What you wanna say?</label>
                    <textarea required className="border border-blue-400 rounded-md mt-4 p-2 h-32" onChange={(e) => txt=e.target.value}/>
                    <button className="bg-gradient-to-r from-purple-400 to-orange-400 p-2 rounded text-white mt-8" onClick={() => {setPost([...posts,{name: name, txt:txt, id:setId()}]); length++}}>Post</button>
                </form>
            </div>
            <Posts posts={posts} setPost={setPost}/>
        </div>
    );
};

export default Home;
