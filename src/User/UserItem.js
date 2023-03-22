import React from 'react';

function UserItem({ users, handleUserDisplay }) {
  return (
    users.map(user => (
      <ul key={user.id}>
        <li>Name: {user.name}</li>
        <li>Location: {user.location}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
        <button type="button" onClick={() => handleUserDisplay(user)}>
          Display User's Repos
        </button>
      </ul>
    ))
  );
}

export default UserItem;