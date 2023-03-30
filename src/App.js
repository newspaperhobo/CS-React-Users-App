import axios from "axios"
import React, { useEffect, useState } from 'react';
import UserItem from './User/UserItem';
import InputField from './shared/InputField';
import { Layout } from "antd";
import "antd/dist/reset.css";
import "./index.css";

const { Header, Content } = Layout;

const headerStyle = {
  textAlign: "left",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

function App() {
  const [userName, setUserName] = useState("newspaperhobo");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("UserName", userName);
  }, [userName]);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserDisplay = (user) => {
    console.log(`You selected ${user.name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setIsLoading(true);
       axios.get(`https://api.github.com/users/${userName}`)
          .then(res =>{
            console.log(res)
            console.log(res.data)
            setUsers([res.data]);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="App">
        <Header style={headerStyle}>
          Users
          {/* <h1>Users</h1> */}
        </Header>
        <Content>
          <form onSubmit={handleSubmit}>
            <InputField
              id="user-name"
              type="text"
              value={userName}
              onChangeFunction={handleUserNameChange}
              isFocused
            >
              User:
            </InputField>
            <button type="submit">Search</button>
            {/* <Button type="primary">Search</Button> */}
          </form>
          <hr />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <UserItem users={users} handleUserDisplay={handleUserDisplay} />
          )}
        </Content>
      </div>
    </Layout>
  );
}

export default App;