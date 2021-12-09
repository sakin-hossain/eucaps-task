import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from "/styles/Home.module.css";

const index = ({photos}) => {
    return (
        <div className={style.container}>
            <h1>Click on Image to get details</h1>
            {
            photos.map(photo=> 
                <div key={photo.id}>
                    <Link href={`/photos/${photo.id}`} passHref>
                    <Image
                        width="750px"
                        height="700px"
                        src={photo.urls.regular} alt="img"
                    />
                    </Link>
                </div>
            )
        }
        </div>
    );
};

export default index;

export async function getStaticProps(){
    const count = 10;
    const apiKey = "GFbWxYGsOUeW6YtBrIhPzR4NFIhxckRADLFhyk0ZCug"
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`)
    const photos = await res.json();
    return{
      props: {
        photos
      }
    }
  }