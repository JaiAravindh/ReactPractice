import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route, NavLink} from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import profiles from './components/profiles';


const App = () => {
    return(
        <MemoryRouter>
    <div>
        <header>
            
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/posts"
                     activeStyle={{color:'red'}}  
                     activeClassName="selected" 
            >posts</NavLink><br/>
            <NavLink to={{
                pathname:'/profiles',
            }}>profiles</NavLink>
            <hr/>
            
            <Route path="/"  exact component={Home}/>   
            <Route path="/posts" component={Posts}/>
            <Route path="/posts/:id" component={PostItem}/>
            <Route path="/profiles" component={profiles}/>
        </header> 
    </div>
        </MemoryRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
