import {React,useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import axios from 'axios';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';


const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const Rooms = () => {

    const columns = [{title:'Room',field:'room'},{title:'Customer',field:'customer'},{title:'Telephone',field:'telephone'},{title:'Start',field:'start'},{title:'End',field:'end'},{title:'ID Card',field:'id_card'},{title:'Price',field:'price'}]

    useEffect (()=>{
        Table() 
    },[])
    const [ListRoomss,setListRooms]=useState([]);
    const endpoint = 'https://druidical-hair.000webhostapp.com/api/transactions'
    const Table = () => {
        axios.get(endpoint).then((Response)=>{
            var data1 = Response.data
            var data = [];
            if(data1){
            data1.map((object,item)=>{
                data.push({room:object.room_no,customer:object.customer_name,telephone:object.telephone,start:object.start_date,end:object.end_date,id_card:object.id_card,id:object.id,price:object.price});
            })
            }
            setListRooms(data);
        })
    }
    return ( 
        <MaterialTable columns={columns}
  title="Rooms List"
  icons={tableIcons}
  data={ListRoomss}
  editable={{
    // onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
    //   axios.put(endpoint,newRow).then(function (response) {
    //     console.log(response)

    //     Table()
    //   })
    //   setTimeout(() => resolve(), 500)
    // }),
    // onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
    //     axios.delete(endpoint,{data:selectedRow}).then(function (response) {
    //         Table()
    //       })
    //   setTimeout(() => resolve(), 1000)
    // })
  }}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          paging: false,
          sorting: true, search: true,
          paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: true, selectionProps: rowData => ({
            color:"primary"
          }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336",color:"#fff"}
        }}

/>
    )
}

export default Rooms
 
