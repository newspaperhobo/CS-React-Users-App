import React, { useEffect, useState } from 'react';
import UserItem from './User/UserItem';
import InputField from './shared/InputField';

function App() {
  const [userName, setUserName] = useState("newspaperhobo");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("UserName", userName);
  }, [userName]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(data => {
        setUsers([data])
        setIsLoading(false)
      })
      .catch(err => console.log(err))
    // getUsersAsync()
    // .then(res => {
    //   setUsers(res.data);
    //   setIsLoading(false);
    // })
  }, [userName]);

  // const getUsersAsync = () => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve({ data : initialUsers }), 3000)
  //   })
  // }

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserDisplay = (user) => {
    console.log(`You selected ${user.name}`);
  };

  return (
    <div className="App">
      <h1>Users</h1>

      <InputField
        id="user-name"
        type="text"
        value={userName}
        onChangeFunction={handleUserNameChange}
        isFocused
      >
        User:
      </InputField>

      <hr />
      {/* JSX conditional needs to be wrapped in curly braces */}
      {isLoading ? <p>Loading...</p> : 
      <UserItem users={ users } handleUserDisplay={handleUserDisplay} />}
    </div>
  );
}

export default App;