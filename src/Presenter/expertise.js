import { useEffect, useState } from "react";
import {ExpertiseView, AddExpertiseForm} from '../Views/expertiseView';

function Expertise({model,apiCall}){ 
    const [allExpertise, setExpertice] = useState(model.getAllExpertise());
    useEffect(()=>setExpertice(model.getAllExpertise()), []);

    const [myExpertise, setMyExpertise]= useState(model.getExpertise());
    useEffect(function(){ 
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

    return(
        <div>
            <ExpertiseView myExpertise={myExpertise} removeExpertise={n => {model.removeExpertise(n); setExpertice([...allExpertise, n])}} />
            <AddExpertiseForm expertise={allExpertise} addExpertise={(t,y) => model.addExpertise(t,y)} 
                done={() => apiCall.applicationPost({start: "Dag1", end: "Dag10", competence: myExpertise})}
                removeOption={(name) => removeSelectedExpertise(name)}   
            />
        </div>
    )
}
export default Expertise;