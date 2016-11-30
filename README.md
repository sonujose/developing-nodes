# DevelopingNodes
**(Webpack, ES2015, Express, Sass, Babel)**  

It is a full stack project for AngularJS web application which objects is:
- Webpack build and bundle all the assests.
- Provide easy to use extensibility with npm managers;
- Mockup server for your application;
- Supports ES2015 using Babel 
- Supports SASS for styling you application
- Give the basic folders and modules structure of angular application;

## Future Updates (Working on it)
- Integrate MongoDB
- Using Firebase

## Installation

1) Create a new folder for your project, and clone this repo inside it
```
git clone https://github.com/sonujose/DevelopingNodes.git
```
2) You need to have node and npm installed on your system, `npm version should be grater than 3.x` [2.x version may create issues in loading some dependencies]. To update npm version run `npm install npm@latest -g`

3) Install webpack if you don't have it already. Need webpack cli for running the application 
```
npm install --global webpack
```
4) Install all npm dependencies
```
npm install
```
5) Run the api server 
```
npm start
```
6) Run the application (webpack --watch)
```
npm test
```
7) Wait untill webpack bundles all your files and server, App will open at `http://localhost:8080`


8) Congratulations your app is running, Enjoy

#### Using webpack
Here webpack is used for bundling the js files. `webpack.config.js` file bundles the entire js files into two modules app and vendor and are minified and used as reference in `index.html`.
The output of bundled files are in the `client/build` file. if you need to test webpack bundling just run command `webpack` 

#### ES2015 is supported (can be upgraded to ECMA Script latest version) 
All the js files inside app support es2015 , used babel loader as the transpiler for es2015. you can upgrade to latest ECMAScipt version in `package.json`, change the `presets` value of `babel` from`es2015` to `latest`

#### Analyze your webpack modules
1) Run 
```
webpack --profile --json >> stats.json
```
2) open
```
http://webpack.github.io/analyse/#modules
```
3) upload stats.json file from your repository

## Have FuN


