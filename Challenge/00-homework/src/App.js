
import './App.css';
import { Children, ReactDOM } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navapp from './Components/Nav';
import HeaderApp from './Components/Header';
import FooterApp from './Components/Footer';
import HomeApp from './Components/Home';
import PortfolioApp from './Components/portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <HomeApp></HomeApp>
  },

  {
    path: "/portfolio",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <PortfolioApp></PortfolioApp>
  },
  {
    path: "/about",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <HeaderApp></HeaderApp>
  },
  {
    path: "*",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <div> 404 PAGE NOT FOUND </div>
  },


    
    
]);
function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>loading...</p>}>


    <div className="App">  
    <HeaderApp></HeaderApp>    
    <FooterApp></FooterApp>
    </div>
            </RouterProvider>
  );
}


export default App;
