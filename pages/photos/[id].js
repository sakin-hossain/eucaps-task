import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from "/styles/Home.module.css";

const Photo = ({ photo }) => {
    console.log(photo);
    return (
        <div className={style.container}>
            <h1>User</h1>
            <Image
                width="750px"
                height="700px"
                src={photo?.urls?.regular} alt="img"
            />
            <h6>Views:{photo?.views}</h6>
            <h6>Likes: {photo?.likes}</h6>
            <h6>Download {photo?.download} times</h6>
            <Link href="/photos">
                <a>Go Back to Photos</a>
            </Link>
        </div>
    );
};

export default Photo;

export async function getStaticPaths() {
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=GFbWxYGsOUeW6YtBrIhPzR4NFIhxckRADLFhyk0ZCug&count=10`)
    const photos = await res.json();
  
    // Get the paths we want to pre-render based on posts
    const paths = photos.map((photo) => ({
      params: { id: photo.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://api.unsplash.com/photos/${params.id}/?client_id=GFbWxYGsOUeW6YtBrIhPzR4NFIhxckRADLFhyk0ZCug`)
    const photo = await res.json()
  
    // Pass post data to the page via props
    return { props: { photo } }
}