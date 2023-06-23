import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from './redux/action';
import "./App.css"

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateValue(event.target.value));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder='Type here!'/>
    </div>
  );
};

const ComponentC = () => {
  const value = useSelector((state) => state.value);

  return (
    <div>
      <p>Value: {value}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className='container'>
      <h1>What You Think Type Here!</h1>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default App;
