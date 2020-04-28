import React from 'react';
import styles from './Post.module.css';

const Post = (props) => (
    <article className={styles.Post}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className={styles.Author}>{props.author}</div>
        </div>
    </article>
);

export default Post;