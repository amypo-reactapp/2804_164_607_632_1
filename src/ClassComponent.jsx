import React , {Component} from 'react';

class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Class Component"
        };
    }
    render(){
        return(
            <div>
                   <h1>{this.state.message}</h1>
        
      </div>
    );
  }
}

export default ClassComponent;
  