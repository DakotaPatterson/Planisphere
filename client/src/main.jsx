// main.jsx

import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Task from './pages/Task';
import Budget from './pages/Budget';
import Venues from './pages/Venues';
import NavBar from './components/navigation'; // Adjust the path as necessary

// Function to set up router with NavBar
const setupRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/Venues',
          element: <Venues />,
        },
        {
          path: '/Budget',
          element: <Budget />,
        },
        {
          path: '/Task',
          element: <Task />,
        },
      ],
    },
  ]);

  // Render the router with NavBar
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <Route path="/navigation" element={<NavBar />} />
    </RouterProvider>
  );
};

// Call the setup function
setupRouter();
