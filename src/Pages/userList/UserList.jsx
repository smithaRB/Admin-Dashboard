import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import { useState } from "react";


export default function UserList() {
  const [data,setData] = useState(userRows);

  const handleDelete = (id) =>{
    setData(data.filter(item=>item.id !== id));
  };
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'user', width: 200, renderCell:(params)=>{
      return(
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Age',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'transaction volume',
      width: 160,
    },
    {
      field:"action",
      headerName:"Action",
      width:"150",
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/users/:id" +params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
         
        <span className="userListDelete"><i class="fa-solid fa-trash" onClick={()=>handleDelete(params.row.id)}></i></span>
         </>
        )
      }
    },
  ];
  
  return (
    <div className="userList">
       <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
  )
}



