## Do not run on VPN. It wasted 3 hours.

## Commands
- Create App in JSX :  npx create-react-app mfe1 
- Create App in TSX :  npx create-react-app login-app --template typescript
- Create ReactNative App in TSX :  npx create-react-native-app <app-name> --template typescript
- npm start : Start react application.

Basics
- If its simply export then use { <Class Name> } during import. If export default then {} can be omitted.
- To use JS code in JSX or TS code in TSX use {}. 
- Form refreshes page by default, because a submit means we are done. This needs to be holded up.

Props and State:
- Props can be updated from parent, state is updated internally.
- Props are like interface so in js/ts/jsx/tsx its better to pass interface (props) from one component to another.

Usefull links:
- List in React: https://www.robinwieruch.de/react-list-component/


React Router:
- Install react router npm install react-router-dom


Controlled/Uncontrolled Component:
- Component controlled by react. It's kind of native components like input, textArea. Internally these components are managing there own state. 
- We can link there internal state with our custom component. So that our custom components become controlled component.
- Data is controlled by DOM. DOM manages state.
- https://www.freecodecamp.org/news/how-to-build-forms-in-react/


Babel: 
- Babel is used for support JSX to old browsers (before es6) 
- npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react


WebPack:
- Used to bundle React App,
Installation Steps:
- Create a file webpack.config.js
- npm install webpack webpack-cli webpack-dev-server html-webpack-plugin html-webpack-inline-svg-plugin --save-dev
- For webpack with typeScript follow this https://webpack.js.org/guides/typescript/
- https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9
- Have a close look at webpack.config


Structure of package.json with webpack:
  "scripts": {
    "start": "webpack-dev-server --open --mode development --hot",
    "build": "webpack --mode production",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

Structure of package.json without webpack:
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },


Deployment:
- LocalHost deployment with 2 MFEs
https://levelup.gitconnected.com/micro-frontends-step-by-step-using-react-webpack-5-and-module-federation-e4b9d840ec71


Adding Firebase to react app
- npm install firebase
- npm install -g firebase-tools
- firebase init
