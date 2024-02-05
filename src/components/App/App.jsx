import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Header from '../Header/Header';
import Main from "../../../pages/Main/Main";
import Listings from "../../../pages/Listings/Listings";
import A_Content from "../../../pages/A+ content/A+Content";
import InstaPosts from "../../../pages/InstaPosts/InstaPosts";

function App() {

  const pagesList = [
    {
      path: "/main",
      element: <Main/>
    },
    {
      path: "/listings",
      element: <Listings/>
    },
    {
      path: "/a+_content",
      element: <A_Content/>
    },
    {
      path: "/insta_posts",
      element: <InstaPosts/>
    },
  ]

  const pages = pagesList.map((page, i) => {
    return (
      <Route key={i} path={page.path} element={page.element}/>
    )
  })

  return (
      <BrowserRouter>
        <Header/>
        <Routes> 
          {pages} 
        </Routes>
      </BrowserRouter> 
    );
}

export default App;
