import React from 'react';

import styles from './FullPost.module.css';

const FullPost = (props) => {
    return (
        <React.Fragment>
            <p>Please select a Post!</p>
            <div className={styles.FullPost}>
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FullPost;
