import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Styling() {
    const navigate = useNavigate();
    const handleClick = () => navigate(-1);
  
    return (
      <button type="button" onClick={handleClick}>
        Go Back ⏪
      </button>
    );
 }