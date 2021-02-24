import {useEffect, useState} from "react";
import {ExpertiseView, AddExpertiseForm} from '../Views/expertiseView';
import {useSelector} from "react-redux";

function Expertise({model, apiCall}) {
    const isLoggedIn = useSelector(state => state.UserReducer.userInfo[0].isLoggedIn);
    const role = useSelector(state => state.UserReducer.userInfo[0].role);

    useEffect(()=>{
        if( (role !== "client") || (isLoggedIn === false) )
            window.location = "/"
    }, [isLoggedIn, role])
    useEffect(()=>{
        if( (role !== "client") || (isLoggedIn === false) )
            window.location = "/"
    }, [])




    const [allExpertise, setExpertice] = useState(model.getAllExpertise());
    useEffect(() => setExpertice(model.getAllExpertise()), []);

    const [myExpertise, setMyExpertise] = useState(model.getExpertise());
    useEffect(function () {
        return model.addObserver(function () {
            setMyExpertise(model.getExpertise());
        })
    }, [model]);

    //Ta bort: Modellen bestämmer om den vill läsa från localstorage eller inte.......
    useEffect(() => localStorage.setItem('formData', myExpertise));

    //remove selected state when chosen?
    const removeSelectedExpertise = e => {
        const exp = allExpertise.filter(name => name !== e);
        setExpertice(exp);
    }

    //TODO add user fname, lname, date of birth and start/end period to API call
    return (
        <div>
            {((role === "client") && (isLoggedIn === true)) ?
                <div>
                <ExpertiseView myExpertise={myExpertise} removeExpertise={n => {
                    model.removeExpertise(n);
                    setExpertice([...allExpertise, n])
                }}/>
                <AddExpertiseForm expertise={allExpertise} addExpertise={(t, y) => model.addExpertise(t, y)}//TODO add fields: {fname: info.fname, lname: info.lname, dateOfBirth: info.dateOfBirth}
                                  done={(info) => apiCall.applicationPost({
                                      start: info.start,
                                      end: info.end,
                                      dateOfBirth: info.dateOfBirth,
                                      status: info.status,
                                      fname: info.fname,
                                      lname: info.lname,
                                      competence: myExpertise
                                  })}
                                  removeOption={(name) => removeSelectedExpertise(name)}
                /></div>
            :""}
        </div>
    )
}

export default Expertise;