import React from 'react'
import './App.css';
import Button from './Button';

const MFE2_Button = React.lazy(
  () => import('MFE2/Button')
);

function App() {
  return (
    <>
      <Button/>
      <MFE2_Button />
    </>
  );
}

export default App;
