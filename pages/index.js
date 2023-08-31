import PostGrid from "../Components/PostGrid";
import {GridSkelton} from "../Components/Skeltons";

export async function getStaticProps(context) {
  const res =  await fetch('http:localhost:3000/api/posts')
  const posts =   await res.json() ;
  return {
    props: {
      data:posts ,
    }
  }
}
export default  function Home({data}) {
  return (
      <div >
        {/*{JSON.stringify(data)}*/}
        {data ? <PostGrid  posts={data.items}  />:<GridSkelton/> }
      </div>
  )
}
