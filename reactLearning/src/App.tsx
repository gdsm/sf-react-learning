import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Styling from './styling/styling';
import ConditionalRendering from './learningTopics/conditionalRendering';
import LifeCycle from './learningTopics/classLifeCycle';
import Home from './home/home';
import Hooks from './learningTopics/hooks';
import ContextApi from './learningTopics/contextApi';
import ErrorBoundary from './learningTopics/errorBoundary';


function App() {
  return <>
            <Routes data-testid="app-routes">
              <Route path="/" element={<Home />} />
              <Route path="/styling" element={<Styling />} />
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/conditionalRendering" element={<ConditionalRendering />} />
              <Route path="/classLifeCycle" element={<LifeCycle count={1}/>} />
              <Route path="/contextApi" element={<ContextApi/>} />
              <Route path="/errorBoundary" element={<ErrorBoundary hasError={false}/>} />
            </Routes>
        </>
}

export default App;
