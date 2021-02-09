import logo from './logo.svg';
import './App.css';
import  {Component} from "react";
import ApiCall from './Model/apiCall';
import FirstView from './Views/firstView';
import Model from './Model/model'
import Expertise from './Presenter/expertise'



class App extends Component{
  constructor(props){
    super(props);
      this.state={
       apiCall: new ApiCall(),
       model: new Model()
      }
  }

  render (){
    return(
      <div>
          <FirstView apiCall={this.state.apiCall}/>
          <Expertise model={this.state.model} apiCall={this.state.apiCall}/>
      </div>
    );
    
  }
}



export default App;
