# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# BootCamp Task - Redux ToolKit

## JavaScript Library I used
1. [npm_i_@reducjs/toolkit] [npm_i_react-redux] [npm_i_react-router-dom] [npm-i-bootstrap] [npm_i-react-icons]

## 📁 setting up my folder structure
1. [api] -> where I will be having my all the courses with their category , array of object in each object it's category and their courses
2. [applayout] -> In the applayout I will be having layout structure like my navbar is constant so i will include <Navbar/> else <Outlet/>(which changes contantly)
3. [router] -> In this I will be having <MainRouter/> which is basically responsible for routing
4. [ui] -> In this I will be having my all those component which are need to be displayed in user interface.
5. [app] -> In app Folder we have store(global store)
6. [features] -> in features we have slices where we perform our desired changes in store

## What inside main component and app component
1. In <Main> : we have Imported APP(component) , store(global storage), Provider(component) from 'react-redux'.
2. In <APP> : In app we have <MainRoute>
