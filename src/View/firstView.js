import { Component } from "react";


class FirstView extends Component{


    handleSubmit=(e)=>{
        this.props.model.testAPI();
    }
    render(){
        return(
            <div>
            <button onClick={()=>this.handleSubmit()}>test</button>
            </div>
        )
    }
}
export default FirstView;