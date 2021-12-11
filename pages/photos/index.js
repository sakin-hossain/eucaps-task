import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import style from "/styles/Home.module.css";

const index = ({photos, page}) => {
    console.log(photos);
    console.log(page);
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

        <button onClick={()=> Router.push(`?page=${page+1}&per_page=${3}&client_id=GFbWxYGsOUeW6YtBrIhPzR4NFIhxckRADLFhyk0ZCug`)}>Next Page</button>
        </div>
    );
};

export default index;



export async function getStaticProps(){
    let page;
    { params:{id: page=1} }
    const apiKey = "GFbWxYGsOUeW6YtBrIhPzR4NFIhxckRADLFhyk0ZCug"
    const res = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${3}&client_id=${apiKey}`);
    const photos = await res.json();
    return{
      props: {
        photos,
        page
      }
    }
  }