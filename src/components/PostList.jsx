import React from 'react'
import Post from './Post'

const PostList = ({currentPosts}) => (
  <div>
    {
      currentPosts.map(post => (
        <Post currentPost={post}/>
      ))
    }
  </div>
)

export default PostList