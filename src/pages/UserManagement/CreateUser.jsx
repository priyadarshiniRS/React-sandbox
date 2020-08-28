import React, { useRef } from "react";
const CreateUser = () => {
  const username = useRef(null);
  const createUser = () => {
    console.log(username);
  };
  return (
    <form>
      <div>
        <label>Username</label>
        <input ref={username} type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <button onClick={createUser}>Create User</button>
    </form>
  );
};
export default CreateUser;
