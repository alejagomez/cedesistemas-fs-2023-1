import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LazyLoading } from '../Components/LazyLoading';

const Home = React.lazy(() => import('../Pages/Home'));
const WearDetail = React.lazy(() => import('../Pages/WearDetail'));
const Profile = React.lazy(() => import('../Pages/Profile'));
const AddClothing = React.lazy(() => import('../Pages/AddClothing'));
const MyClothes = React.lazy(() => import('../Pages/MyClothes'));
const Login = React.lazy(() => import('../Pages/Login'));
const Signup = React.lazy(() => import('../Pages/Signup'));

//import { Home } from '../Pages/Home'
//import { WearDetail } from '../Pages/WearDetail'

export const router = createBrowserRouter([ //en esta función defino la raiz "path" y digo cual es la pagina que yo quiero que se cargue inmediatamente
  {
    path: "/",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: "/wear-detail/:id",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <WearDetail />
      </Suspense>
    )
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Signup />
      </Suspense>
    )
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Profile />
      </Suspense>
    )
  },
  {
    path: "/add-clothing",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <AddClothing />
      </Suspense>
    )
  },
  {
    path: "/my-clothes",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <MyClothes />
      </Suspense>
    )
  }
]);
