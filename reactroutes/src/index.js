import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import profiles from './components/profiles';


const App = () => {
    return(
        <BrowserRouter>
<div>
            <Route path="/" exact component={Home}/>   
            <Route path="/posts" component={Posts}/>
            <Route path="/profiles" component={profiles}/>
</div>
            
            
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)