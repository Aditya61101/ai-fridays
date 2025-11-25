import { createBrowserRouter, Navigate } from 'react-router';
import LandingPage from './pages/landingPage';
import LoginPage from './pages/auth/login';
import SignupPage from './pages/auth/signup';
import ChatPage from './pages/user/chat';

const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/auth/login', element: <LoginPage /> },
    { path: '/auth/signup', element: <SignupPage /> },
    { path: '/chat', element: <ChatPage /> },
    { path: '*', element: <Navigate to='/' /> }
]);

export default router;