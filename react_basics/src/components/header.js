import React,{Component} from 'react';


class Header extends Component{
    
    state = {
        keywords:'Hello'
    }
    
    inputChangeHandler = (event) =>{
       // console.log(event.target.value)
       this.setState({
           keywords: event.target.value
       })
    }

    render(){
        return(
            <header>
                <div className="logo">Logo</div>
                <input
                    type='text'
                    onChange={this.inputChangeHandler.bind(this)}
                    />
            </header>
        )
    }
}

export default Header;
