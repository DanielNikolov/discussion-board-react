import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';
import styles from  './Blog.module.css';

const Blog = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const updatedPosts = response.data.slice(0, 4).map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                setPosts(updatedPosts);
            })
    })

    const topPosts = posts.map(post => {
        return <Post key={post.id} title={post.title} author={post.author} />
    })
    return (
        <div>
            <section className={styles.Posts}>
                {topPosts}
            </section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}

export default Blog;