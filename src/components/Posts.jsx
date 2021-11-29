import React from 'react';
import {useState} from 'react';
import likeCount from '../img/likesCount.png';



const Posts = () => {

    const [activated, setActivated] = useState(false);
    const [likes, setLikes] = useState(0);

    const [posts, setPosts] = useState([
            {name: "Billie Eilish", age:19,id:0,likes},
            {name: "Benzema", age:32,id:1},
            {name: "Limontez", age:25,id:2}
        ]);


    const onDelete = (id) => {
        setPosts(posts.filter(val => val.id!==id));
    }


    const handleIncrement = (id) => {
        console.log(id);
        setLikes(likes+1);
        setActivated(true);
    }




    return (

        <div>
            {posts.map(element => <div key={element.id} style={{height:"200px", width:"400px", backgroundColor:"#e9e8e8", borderRadius:"0.5rem", display:"flex", flexDirection:"column", marginTop:"100px", marginLeft:"37vw"}}>
                <img src={likeCount} alt="heart logo" className="likeLogo" />
                <p className="likeCounter">{element.likes}</p>
                <p>Name: {element.name}</p><p>Age: {element.age}</p>
                <div className="buttons"><button className="btn btn-primary" id="btn1" onClick={() => activated ? null : handleIncrement(element.id)}>Like</button>
                    <button className="btn btn-danger"  onClick={() => onDelete(element.id)} id="btn2">Delete</button>
                </div></div>)}
        </div>

    );
};

export default Posts;