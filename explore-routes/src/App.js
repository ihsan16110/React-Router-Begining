import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';


function App() {
// creating route and its path here
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main> ,
    children:[
      {path: '/',element:<Home></Home>},
      {path: '/home',element:<Home></Home>},
      {path: '/products',element:<Products></Products>},
      {
        path: '/friends',
        loader: async() => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
      
      element:<Friends></Friends>
     },
      {path:'/about',element:<About></About>},

      {
        path:'/friend/:friendId',
        loader: async({params}) =>{ // taking params using destructuring 
          // console.log(params.friendId)
          // return null;
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element:<FriendDetails></FriendDetails>
      },
      {
        path:'posts',
        loader:async() => {

          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element:<Posts></Posts>
      }

    ] 

  },
 
    // {path:'/about',element:<About></About>},
    {path:'*',element:<div>This route not found</div>}



  ])
  return (
    <div className="App">
    { /*Removed Header From Here*/}
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
