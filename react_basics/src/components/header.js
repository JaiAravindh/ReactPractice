import React,{Component} from 'react';


class Header extends Component{
    
    state = {
        keywords:'Hello'
        active : false;
    }
    
    inputChangeHandler = (event) =>{
       // console.log(event.target.value)
        const value = event.target.value === '' ? false : true; 
        this.setState({
           keywords: event.target.value,
            active : value
       })
    }

    render(){
       // const style = {
       //     background:'red'
       // }
        
        //if(this.state.keywords !== 'blue'){
          //  style.background = 'blue';
       // }
       //else{
       //    style.background = 'red';
       //}
        
        return(
            <header style={{background:'${this.state.active ? 'red' : 'blue'}'}}>
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
