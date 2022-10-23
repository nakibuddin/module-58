import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Orders from './components/Orders';
import PrivateRoutes from './routes/PrivateRoutes';

const my_router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},        
        {path: '/orders', element: <PrivateRoutes> <Orders></Orders> </PrivateRoutes> },
        {path: '/login', element: <LogIn></LogIn>},
        {path: '/register', element: <Register></Register>}
    ]}
])
function App() {
    return (
        <div className="App">
            <RouterProvider router={my_router}></RouterProvider>
        </div>
    );
}

export default App;
