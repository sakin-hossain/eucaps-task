import React from 'react';

const Photos = ({photo}) => {
    return (
        <div>
            <img src={photo.urls.regular} alt="photo" />
        </div>
    );
};

export default Photos;

export async function getStaticPaths(){
    const count = 10;
  const apiKey = "GFbWxYGsOUeW6YtBrIhPzR4NFIhxckRADLFhyk0ZCug"
  const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`)
  const photos = await res.json();

  const paths = photos.map((photo) => ({
      params: {id: photo.id},
  }))

  return {paths, fallback:false}
}

export async function getStaticProps({params}){
    const res = await fetch(`https://api.unsplash.com/photos/${params.id}/?client_id=${apiKey}`)
    const photo =  await res.json();

    return{
        props: { photo }
    }
}