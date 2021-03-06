import React from 'react';

const News = ({news}) => {
    return (
        <div className='news'>
            <h4>Latest NBA news:</h4>
            {news.slice(0,10).map((post, pos) => (
                <li key={pos}>
                <a href={post.url} target="_blank" rel="noreferrer">
                    {post.title}
                </a>
                <hr/>
            </li>   
                )
            )}
        </div> 
    );
}

export default News;