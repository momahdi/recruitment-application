import React, {useState} from 'react';
import UserReducer from "../Model/Redux/Reducers/UserReducer";
import {useSelector} from "react-redux";
const ExpertiseView = ({myExpertise, removeExpertise}) => (
    <div>
        {myExpertise.map(e => 
            <tbody>
                <tr key={e.name + e.year}>
                    <td>{e.name}</td>
                    <td>{e.year}</td>
                </tr>
                <button onClick={() => removeExpertise(e.name)}>remove</button>
            </tbody>
            )}
    </div>
);



const AddExpertiseForm = ({expertise, addExpertise, done, removeOption}) => {

    const userInfo = useSelector(state => state.UserReducer.userInfo)
    console.log(userInfo)
    const handleSubmit = () => {
        let ans = window.confirm("Are you sure you want to submit your application?");
        if(ans === true){
            done({start: start, end: end, fname: userInfo.fname, lname: userInfo.lname, status: "unhandled", dateOfBorth:userInfo.dateOfBirth});
        }
    }

    const [year, setYear] = React.useState(0);
    const [type, setType] = React.useState('');
    const [start, setStart] = React.useState("");
    const [end, setEnd] = React.useState("");
    return (
        <div>
            <input type="number" min="0" placeholder="years of experience" onChange={(event) => setYear(event.target.value)} />
            <select onChange={(event) => setType(event.target.value)}>
                <option>choose your expertise</option>
                {expertise.map((k) => <option key={k}>{k}</option>)}
            </select>
            <button onClick={() => {addExpertise(type, year); removeOption(type)}}>add skill to application</button>

            <div>
                <br/>
                <input type="number" min="0" placeholder="available start period" onChange={(event)=>{ setStart(event.target.value) }} />
                <input type="number" min="0" placeholder="available end period" onChange={(event)=>{ setEnd(event.target.value) }}/>
                <button onClick={() => handleSubmit()}>confirm and send application</button>
            </div>


        </div>
    );
};

export {ExpertiseView, AddExpertiseForm}; 
