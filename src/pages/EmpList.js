import React from 'react'
import { RiDeleteBin6Fill,RiEyeLine,RiEditBoxFill } from "react-icons/ri";




export default function EmpList(props) {



    let myArray = props.empData; // data
    let deleteFunction = props.deleteEmp;
    let viewEmpFunction = props.viewEmployee;
    const myKeys = myArray[0];

    let keysList = Object.keys(myKeys).map((keyName, ind)=>{
        return(
               <th key={ind}>{keyName}</th>
        );
    });
    

    let tableBody = myArray.map((obj, index)=>{
       return(
        
        <tr key={index}>
        <td>{obj.Eid}</td>
        <td>{obj.Name}</td>
        <td>{obj.sal}</td>
        <td>
         <div className="d-flex justify-content-between">

            <RiEyeLine className="text-primary" onClick={()=>viewEmpFunction(obj)} />
            
            <RiEditBoxFill className="text-warning" />
            <RiDeleteBin6Fill className="text-danger" onClick={()=>deleteFunction(obj.Eid)} />

         </div>
        </td>
        </tr>
        
        
       );

    })

  return (
    <>
        
        <table className="table">
            <thead>
                <tr>
                  {keysList}
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableBody}
            </tbody>
            </table>


            
      

    </>
  )
}
