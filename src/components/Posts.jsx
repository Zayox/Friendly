import React from 'react';


const Posts = () => {

    const posts = [
        {name: "Billie Eilish", age:19},
        {name: "Benzema", age:32},
        {name: "Limontez", age:25}
    ];


    function onDelete(){
        posts.pop();
    }


    return (

        <div>
            {posts.map(element => <div style={{height:"200px", width:"400px", backgroundColor:"#e9e8e8", borderRadius:"0.5rem", display:"flex", flexDirection:"column", marginTop:"100px", marginLeft:"37vw"}}><p>Name: {element.name}</p><p>Age: {element.age}</p><button className="btn btn-danger" style={{marginTop:"82px"}} onClick={onDelete}>Delete</button></div>)}
        </div>

    );
};

export default Posts;