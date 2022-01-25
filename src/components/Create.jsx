import React from 'react';

const Create = () => {
    return (
        <div className="flex items-center justify-center h-[80vh]">
            <form className="flex flex-col w-72">
                <label>Name: </label>
                <input type="text" required className="border border-black rounded mt-4 pl-2"/>
                <label className="mt-4">Age: </label>
                <input type="text" required className="border border-black rounded mt-4 pl-2"/>
                <label className="mt-4">Title: </label>
                <input type="text" required className="border border-black rounded mt-4 pl-2"/>
                <label className="mt-4">Your text: </label>
                <input type="text" required className="border border-black rounded h-32 w-[100%] mt-4 pl-2"/>
                <button className="bg-gradient-to-r from-purple-400 to-orange-400 rounded p-2 text-white mt-12">Post</button>
            </form>
        </div>
    );
};

export default Create;