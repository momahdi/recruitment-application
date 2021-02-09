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

const AddExpertiseForm = ({expertise, addExpertise, done}) => {
    const [year, setYear] = React.useState(0);
    const [type, setType] = React.useState('');
    return (
        <div>
            <input onChange={(event) => setYear(event.target.value)} />
            <select onChange={(event) => setType(event.target.value)}>
                <option>choose your expertise</option>
                {expertise.map((k) => <option key={k}>{k}</option>)}
            </select>
            <button onClick={() => addExpertise(type, year)}>add</button>
            <button onClick={() => done()}>done</button>
        </div>
    );
};

export {ExpertiseView, AddExpertiseForm}; 
