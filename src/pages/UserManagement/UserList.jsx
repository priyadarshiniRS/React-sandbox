import React, { useEffect, useState } from "react";
import { Card, useRadioGroup } from "@material-ui/core";
import { getUserList } from "../../services/api.service";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserList().then((res) => {
      console.log(res.data);
      setUserList(res.data);
    });
  }, []);
  const deleteUser = (ind) => {
    let newList = [...userList];
    newList.splice(ind, 1);
    setUserList(newList);
  };

  return (
    <div>
      {userList.length ? (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, i) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={deleteUser.bind(this, i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div> Loading...</div>
      )}
    </div>
  );
};
export default UserList;
