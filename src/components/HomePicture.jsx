import React, {useEffect, useState} from 'react';
import sanityClient from "../client";


function HomePicture() {
    const [isloading, setIsloading] = useState(true)
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type =="post"]{
        title,
        subtitle,
        slug,
        mainImage{
        asset->{
        _id,
        url
        },
        alt
        },
        home
        }`)
            .then(res => {
                setPosts(res)
                setIsloading(false)
            })
            .catch(console.error)
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
                    <img src={post.mainImage.asset.url} key={index}
                         alt="photo de la page d'accueil"/>)}
            </div>
            <div className='home'>
                {isloading ? 'Loading..' : posts.map((post, index) =>
                    <h3 key={index}>{post.home}</h3>)}
            </div>
        </>
    );
}

export default HomePicture;