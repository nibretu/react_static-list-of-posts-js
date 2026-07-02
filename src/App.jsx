// src/App.jsx
import React from 'react';
import PostList from './components/PostList';
import './App.scss';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?u=1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?u=2',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    avatar: 'https://i.pravatar.cc/150?u=3',
  },
];

const postsData = [
  {
    id: 1,
    title: 'First Post',
    body: 'This is the content of the first post.',
    userId: 1,
  },
  {
    id: 2,
    title: 'Second Post',
    body: 'Here is another post with different content.',
    userId: 2,
  },
  {
    id: 3,
    title: 'Third Post',
    body: 'The third post discusses component architecture.',
    userId: 1,
  },
  {
    id: 4,
    title: 'Fourth Post',
    body: 'This post covers state management in React.',
    userId: 3,
  },
];

const commentsData = [
  {
    id: 1,
    postId: 1,
    name: 'Commenter 1',
    email: 'c1@example.com',
    body: 'Great post! Very informative.',
  },
  {
    id: 2,
    postId: 1,
    name: 'Commenter 2',
    email: 'c2@example.com',
    body: 'Thanks for sharing this.',
  },
  {
    id: 3,
    postId: 2,
    name: 'Commenter 3',
    email: 'c3@example.com',
    body: 'I learned a lot from this.',
  },
  {
    id: 4,
    postId: 2,
    name: 'Commenter 4',
    email: 'c4@example.com',
    body: 'Can you explain more about this?',
  },
  {
    id: 5,
    postId: 3,
    name: 'Commenter 5',
    email: 'c5@example.com',
    body: 'This is exactly what I needed.',
  },
  {
    id: 6,
    postId: 4,
    name: 'Commenter 6',
    email: 'c6@example.com',
    body: 'Great explanation!',
  },
  {
    id: 7,
    postId: 4,
    name: 'Commenter 7',
    email: 'c7@example.com',
    body: 'Very helpful, thank you.',
  },
];

const posts = postsData.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: commentsData.filter(comment => comment.postId === post.id),
}));

const App = () => {
  return (
    <div className="app">
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
