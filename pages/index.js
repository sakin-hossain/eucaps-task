import Link from "next/link";
import style from "/styles/Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <h1>Welcome to Image Hub</h1>
      <Link href="/photos">
        <a>Photos</a>
      </Link>
    </div>
  )
}

export default Home;