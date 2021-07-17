import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getusers').then((response) => {
      setUserList(response.data);
    });
  }, []);

  const postUser = () => {
    Axios.post('http://localhost:3001/insertuser', {
      userName: 'Randolph',
      friends: 33,
    }).then(console.log('user posted'));
  };
  const postFood = () => {
    Axios.post('http://localhost:3001/insertfood', {
      foodName: 'Cheese',
      foodGroup: 'Dairy',
    }).then(console.log('food posted'));
  };

  return (
    <div className="App">
      <button onClick={() => postUser()}>POST USER</button>
      <button onClick={() => postFood()}>POST FOOD</button>
      {userList.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.userName}</h2>
            <h3>Friends: {el.friends}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
