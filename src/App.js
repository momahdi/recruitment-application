import logo from './logo.svg';
import './App.css';
import react, {Component} from "react";
import ApiCall from './Model/apiCall';
import FirstView from './view/firstView';
const axios = require('axios').default;



class App extends Component{
  constructor(props){
    super(props);
      this.state={
       model: new ApiCall()
      }
  }



  render (){
    return(
     <FirstView model={this.state.model}/>
    );
    
  }
}



export default App;
