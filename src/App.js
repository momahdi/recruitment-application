import {Component} from "react";
import './App.css';
import {Route} from "react-router-dom"
//models
import ApiCall from './Model/apiCall';
import Model from './Model/model'
//presenter
import Expertise from './Presenter/expertise'
//views
import FirstView from './Views/firstView';
import Authentication from "./Views/Authentication";
import SignUpAdmin from "./Views/SignUpAdmin";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiCall: new ApiCall(),
            model: new Model()
        }
    }

    render() {
        return (
            <div className="applicationApp">
                <Route
                    exact path="/"
                    render={() => <Authentication/>}
                />
                <Route
                    exact path="/admin/signup"
                    render={() => <SignUpAdmin/>}
                />
                <Route
                    exact path="/user/application"
                    render={() => <div>
                        <FirstView apiCall={this.state.apiCall}/>
                        <Expertise model={this.state.model} apiCall={this.state.apiCall}/>
                    </div>}
                />

            </div>
        );

    }
}


export default App;
