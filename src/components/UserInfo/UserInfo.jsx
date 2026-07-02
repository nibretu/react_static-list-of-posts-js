// export const UserInfo = () => <>Put the user here</>;
// src/components/UserInfo/UserInfo.jsx
import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ user }) => {
  const { name, email, avatar } = user;

  return (
    <a href={`mailto:${email}`} className="UserInfo">
      <img src={avatar} alt={name} className="UserInfo__avatar" />
      <span className="UserInfo__name">{name}</span>
    </a>
  );
};

export default UserInfo;
