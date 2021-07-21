import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import {posts} from '../profile'

const Post = () => {
    const router = useRouter();
    const currentPost = posts.filter(post => post.title === router.query.title)[0] //take every single post and show what you choosen
    //currentPost containe the JSON Object of de the post
    console.log(currentPost);
    return (        
        <Layout footer={false} title={currentPost.title}> 
            <div className="text-center">
                <img src={currentPost.imageURL} className="img-fluid p-4" style={{width: '50%'}}/>
                <p>{currentPost.content}</p>
            </div>
        </Layout>
    )
}

export default Post