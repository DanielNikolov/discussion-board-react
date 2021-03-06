import React from 'react';

import styles from './FullPost.module.css';

const FullPost = (props) => {
    let post = <p>Please select a Post!</p>;
    post = (
      <div className={styles.FullPost}>
        <h1>Title</h1>
        <p>Content</p>
        <div className={styles.Edit}>
          <button className={styles.Delete}>Delete</button>
        </div>
      </div>
    );
    return post;
}

export default FullPost;
