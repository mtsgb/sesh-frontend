import { createBrowserRouter } from 'react-router-dom'
import HomeView from './pages/home/HomeView';

export function useAppRoute() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeView />,
    },
  ]);

  return (
    { router }
  );
}