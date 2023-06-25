import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {

  const router=createBrowserRouter([
    {path:'/',element:<div>This is Default Page</div>},
    {path: '/home',element:<Home></Home>},
    {path:'/about',element:<About></About>},
    {path:'/products',element:<Products></Products>}

  ])
  return (
    <div className="App">
    { /*Removed Header From Here*/}
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
