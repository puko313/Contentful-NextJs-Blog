import { useRouter } from 'next/router'
import SinglePost from "../../Components/SinglePost";
import {GridSkelton} from "../../Components/Skeltons";

export async function getStaticPaths() {
    const res= await  fetch('http:localhost:3000/api/posts')
    const posts =   await res.json() ;

    const paths = posts.items.map((post) => ({
        params: { id: post.sys.id },
    }))
    return {
        paths,fallback: true // false or 'blocking'
    };
}

export async function getStaticProps({params}) {
    console.log(params)
    const res =  await fetch(`http:localhost:3000/api/posts/${params.id}`)
    const post =  await res.json() ;
    return {
        props: {
            post:post ,
        }
    }
}
const Post = ({post}) => {
    const router = useRouter()
    const { pid } = router.query

    return <>
        { post ? <SinglePost post={post}/>:<GridSkelton/>}
    </>
}

export default Post
