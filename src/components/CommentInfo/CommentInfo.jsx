// export const CommentInfo = () => <>Put the comment here</>;
import React from 'react';
import './CommentInfo.scss';

const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__name">{name}</div>
      <a href={`mailto:${email}`} className="CommentInfo__email">
        {email}
      </a>
      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};

export default CommentInfo;
