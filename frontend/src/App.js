
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState([]);

  useEffect(()=> {
    axios.get('/api').then(res => setPeople(res.data))
  }, []);

  return people.map((p, index) => {
    return <p key={index}>{p.id} {p.name} {p.age}</p>
  })
}

export default App;
