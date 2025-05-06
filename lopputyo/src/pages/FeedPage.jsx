import Post from "../components/post"


const postExample = {
    username: "fitnesstee",
    picSrc: "/avatar.jpeg",
    likes: 1061,
    description: "Ensi viikolla Salatut elämät -sarjassa Salla kertoo Danielalle nähneensä Noelin toisen naisen seurassa. Myöhemmin Danielaa odottaa kotona yllätys."
}

export default function FeedPage() {
    return(
    <>
    <Post post={postExample}/>
    </>)
}

