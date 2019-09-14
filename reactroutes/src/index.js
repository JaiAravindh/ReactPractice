import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route} from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import profiles from './components/profiles';


const App = () => {
    return(
        <MemoryRouter>
    <div>
            <Link to="/">Home</Link>
            <Link to="/posts">posts</Link>
            <Link to={
                pathname:'/profiles',
                hash : '#hash1',
                search:'?profiles=true',
            }}> profiles</Link>
        
            <Route path="/" exact component={Home}/>   
            <Route path="/posts" component={Posts}/>
            <Route path="/profiles" component={profiles}/>
    </div>
            
            
        </MemoryRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
