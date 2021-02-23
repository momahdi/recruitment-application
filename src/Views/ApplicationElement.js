import React from "react";
//TODO GET( lname and fname ) aswell
const ApplicationElement = ({item}) => {
    return (
        <tr key={item.id}>
            <td>"first name here"</td>
            <td>"last name here"</td>
            <td>{item.competence?.map(comp =>{
                return(
                    <div>{comp.name}</div>
                )
            })}</td>
            <td>{item.startPeriod}</td>
            <td>{item.endPeriod}</td>
            <td>"date of birth here"</td>
            <td>{item.date}</td>
        </tr>
    )

}

export default ApplicationElement;