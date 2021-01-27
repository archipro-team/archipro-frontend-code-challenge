/*
Table to display users and their information, utilises MaterialTable and Material-UI
*/

import React from 'react';
import MaterialTable from 'material-table';
import InfoPanel from '../userInfoPanel/userInfoPanel';

function createData(id, name, email, phone, balance) {
    return {"id": id, "name": name, "email": email, "phone": phone, 'balance': balance};
  }
  
export default function UserTable(props) {
      const { data, tableColumns } = props;

      const user_rows = []
  
      data.forEach((user) => {
        user_rows.push(createData(user._id, user.name, user.email, user.phone, user.balance))
      })

      const getPersonalDetails = ((id) => {
        var user;
        data.map((person) => {
          if (person._id === id) {
            console.log(person)
            user = person        
          } return user
        });
        return user
    })

    const columns = tableColumns.map((values) => {
        return {'title': values, 'field': values, type: 'string'}
    });

    console.log(columns)
  
      return (
            <MaterialTable
                title=""
                columns={columns}
                data={user_rows} 

                options={{
                search: true,
                pageSize: 5,
                pageSizeOptions : [5, 10, 20]
                }}
                detailPanel={[
                {
                    icon: 'expand_more',
                    tooltip: 'Show Details',
                    render: (rowData) => { 
                        console.log(rowData)
                        const person = getPersonalDetails(rowData.id)
                        return(<InfoPanel person={person} />) 
                    }
                }
                ]}
            />
      )
  }