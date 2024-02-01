import React from 'react';

const UserList = ({ users, onAllotButtonClick }) => {
  return (
    <div>
      <h3>New Registrations</h3>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.add}</p>
          <p>House Allotted: {user.houseAlloted}</p>
          <button onClick={() => onAllotButtonClick(user)}>
            Allot
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;
