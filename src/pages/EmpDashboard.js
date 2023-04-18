import React,{ useState } from "react";
import EmpData from './employeeData.json';
import EmpList from "./EmpList";
import AddEmployee from "./AddEmployee";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmpModel from "./emp_model";


// why map is not working in place of filter
function EmpDashboard()
{
    let [data, changData] = useState(EmpData);
    const [selectedEmployee, setSelectedEmployee] = useState({});
    
    
    let deleteEmp = (eidToDelete)=>{  // 101
        let tempArray = data.filter((empPrem)=>{
           return(empPrem.Eid !== eidToDelete);
        });
        changData(tempArray);
    }

    let addEmployee = (empObj)=>{
       let tempArray = [...data,empObj];
       changData(tempArray);
    }

    let [modalShow, setModalShow] = useState(false);

    let viewEmployee = (empObj)=>{
        setSelectedEmployee(empObj);
        setModalShow(modalShow = true);
     }

   let handleClose = ()=>{
    setModalShow(!modalShow);
   }

    

    return(
        <>

         <EmpList empData={data} deleteEmp={deleteEmp} viewEmployee={viewEmployee}  />
         <AddEmployee addEmployee={addEmployee}  />
         <EmpModel 
            values={{
                modalShow : modalShow,
                handleClose : handleClose,
                selectedEmployee : selectedEmployee
            }}
         />
         
            

        </>
    );
}
export default EmpDashboard;