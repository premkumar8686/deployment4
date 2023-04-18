import React,{ useState } from 'react';

export default function AddEmployee(props) {

  const [id, setId] = useState(0);
  const [name, setName] = useState("test");
  const [sal, setSal] = useState(0);

  let addMyData = props.addEmployee;


  const changeHandler =(e)=>{
    if(e.target.name === "eId")
    {
      setId(e.target.value);
    } else 
    if (e.target.name === "eName")
    {
      setName(e.target.value);
    } else {
      setSal(e.target.value);
    }
  }

  return (
    <>


  <div className="mb-3 mt-3">
    <label for="email" className="form-label">id:</label>
    <input onChange={changeHandler} type="text" className="form-control" placeholder="Enter ID" name="eId" />
  </div>

  <div className="mb-3">
    <label for="pwd" className="form-label">Name:</label>
    <input onChange={changeHandler} type="text" className="form-control" id="eName" placeholder="Enter Name" name="eName" />
  </div>

  <div className="form-check mb-3">
    <label for="pwd" className="form-label">sal:</label>
    <input onChange={changeHandler} type="text" className="form-control" id="eSal" placeholder="Enter Sal" name="eSal" />
  </div>

  <button type="submit" className="btn btn-primary" onClick={()=>{
    let empObj = {
      Eid: id,
      Name: name,
      sal: sal,
    };
    addMyData(empObj)
  }} >Submit</button>


<h1>{id} - {name} - {sal}</h1>
    </>
  )
}
