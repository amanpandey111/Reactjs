/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import SignIn from "../components/SignIn";

// const About = lazy(() => import('../components/About'));

const wait = (time: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// eslint-disable-next-line react-refresh/only-export-components
const About = lazy(() => wait(5000).then(() => {
  console.log('Finally');
  return import("../components/About");
}));
const Contact = lazy(() => wait(3000).then(() => import("../components/Contact").then(module => {
  return { default: module.Contact } //! this is for named export
})))
const SignIn = lazy(() => wait(4000).then(() => import('../components/SignIn')))

const router = createBrowserRouter([
  {
    path: '/',
    Component: Navbar,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: (
          // 2. Define the lazy loader inline inside Suspense
          <Suspense fallback={<div>Loading About page...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<div>Contact page is Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'signin',
        element: (
          <Suspense fallback={<div>Sign In page is Loading...</div>}>
            <SignIn />
          </Suspense>
        ),
      },
    ]
  }
])

export default router;
