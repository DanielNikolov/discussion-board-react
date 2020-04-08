import React from 'react';
import styles from './Post.module.css';

const Post = (props) => (
    <article className={styles.Post}>
        <h1>Title</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default Post;