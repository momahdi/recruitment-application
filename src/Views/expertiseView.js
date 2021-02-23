import React from 'react';
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
    const handleSubmit = () => {
        let ans = window.confirm("Are you sure you want to submit your application?");
        if(ans === true){
            done();
        }
    }

    const [year, setYear] = React.useState(0);
    const [type, setType] = React.useState('');
    return (
        <div>
            <input type="number" min="0" placeholder="years of experience" onChange={(event) => setYear(event.target.value)} />
            <select onChange={(event) => setType(event.target.value)}>
                <option>choose your expertise</option>
                {expertise.map((k) => <option key={k}>{k}</option>)}
            </select>
            <button onClick={() => {addExpertise(type, year); removeOption(type)}}>add</button>
            <button onClick={() => handleSubmit()}>send application</button>
        </div>
    );
};

export {ExpertiseView, AddExpertiseForm}; 
