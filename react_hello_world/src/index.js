import React from 'react'
import ReactDOM from 'react-dom';

const App = () =>{
    return React.createElement('h1', {className : 'title'})
}


ReactDOM.render(<App/>,document.querySelector('#root'));

  
