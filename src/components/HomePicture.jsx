import React, {useEffect, useState} from 'react';
import axios from 'axios'


const HomePicture = () => {
    const [isloading, setIsloading] = useState(true)
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8055/items/post`)
            .then(res => {
                setPosts(res.data.data)
                setIsloading(false)
            })
    }, [])

    return (
        <>
            <div className="text-title">
                <div className='title'>
                    {isloading ? 'Loading..' : posts.map((post, index) =>
                        <h1 key={index}>{post.title}</h1>)}
                </div>
                <div className='title'>
                    {isloading ? 'Loading..' : posts.map((post, index) =>
                        <h2 key={index}>{post.subtitle}</h2>)}
                </div>
            </div>
            <div className='home-picture'>
                {isloading ? 'Loading..' : posts.map((post, index) =>
                    <img src={"http://localhost:8055/assets/" + post.image} key={index}
                         alt="photo de la page d'accueil"/>)}
            </div>
        </>
    );
};

export default HomePicture;
