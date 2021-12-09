import Link from "next/link";

const Home = ({photos}) => {
  console.log(photos);
  return (
    <div>
        <h1>Welcome to Image Hub</h1>
        {
          photos.map(photo=> 
             <div key={photo.id}>
                <Link href={`/${photo.id}`}>
                  <img src={photo.urls.regular} alt="img"/>
                </Link>
             </div>
            )
        }
    </div>
  )
}

export default Home;

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