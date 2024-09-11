import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from '@src/Header';
import MyReactFunction from 'myreactmodule';
import MyComponent from './MyComponent';


// npm install --save typescript@3.2.1 @types/node @types/react @types/react-dom @types/jest
type User = {
  name: string;
}


function App() {
  const [user, setUser] = useState<User | null>({name:'gaurav'})
  const sum =  MyReactFunction(2,5);
  return (
    <div className="App">
      <Header title='my header'/>
      <header className="App-header">
        {/* <MyComponent/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=> setUser(null)}>Set User</button>
        <p>{sum}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
