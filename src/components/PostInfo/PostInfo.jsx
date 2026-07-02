// export const PostInfo = () => <>Put the post here</>;
import React from 'react';
import UserInfo from '../UserInfo';
import CommentList from '../CommentList';
import './PostInfo.scss';

const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{title}</h2>
      <p className="PostInfo__body">{body}</p>
      {user && <UserInfo user={user} />}
      {comments && comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <div data-cy="NoCommentsMessage">No comments yet</div>
      )}
    </div>
  );
};

export default PostInfo;
