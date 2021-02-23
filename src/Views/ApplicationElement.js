import React from "react";
//TODO GET( lname and fname and status ) aswell
const ApplicationElement = ({item}) => {

    //TODO CHANGE {testing} to directly look inside item from api
    const testing = "unhandled";

    return (
        <tr key={item.id}>
            <td>"first name here"</td>
            <td>"last name here"</td>
            <td>{item.competence?.map(comp =>{
                return(
                    <div>{comp.name} {comp.year} year(s)</div>
                )
            })}</td>
            <td>week {item.startPeriod}</td>
            <td>week {item.endPeriod}</td>
            <td>"date of birth here"</td>
            <td>{item.date}</td>
            <td><select name="status" >

                {(testing === "unhandled")?
                    <option selected="selected" value="unhandled">unhandled</option>
                :<option value="unhandled">unhandled</option>}

                {(testing === "rejected")?
                    <option selected="selected" value="rejected">rejected</option>
                    :<option value="rejected">rejected</option>}

                {(testing === "accepted")?
                    <option selected="selected" value="accepted">accepted</option>
                    :<option value="accepted">accepted</option>}
            </select></td>
        </tr>
    )

}

export default ApplicationElement;