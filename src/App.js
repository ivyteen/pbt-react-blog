import './App.css';

import { Route, Routes } from 'react-router-dom';

import PostList from './pages/PostList';
import PostArticle from './pages/PostArticle';


function App() {
  return (
    <div>
      <h1 align="center">Blog Title</h1>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:no" element={<PostArticle />} />
      </Routes>
    </div>

  );
}

export default App;
