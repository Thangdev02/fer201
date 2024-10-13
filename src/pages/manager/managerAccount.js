import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

// Sample data for team members
const teamData = [
  { id: 1, name: 'Jon Snow', age: 32, phone: '0800123456', email: 'jonsnow@gmail.com', access: 'Admin' },
  { id: 2, name: 'Cersei Lannister', age: 42, phone: '0800654321', email: 'cersei@lannister.com', access: 'Manager' },
  { id: 3, name: 'Jaime Lannister', age: 45, phone: '0800987654', email: 'jaime@lannister.com', access: 'Editor' },
  { id: 4, name: 'Arya Stark', age: 21, phone: '0800111222', email: 'arya@stark.com', access: 'Admin' },
  { id: 5, name: 'Daenerys Targaryen', age: 29, phone: '0800555666', email: 'dany@targaryen.com', access: 'Manager' },
  { id: 6, name: 'Tyrion Lannister', age: 39, phone: '0800777888', email: 'tyrion@lannister.com', access: 'Editor' },
  { id: 7, name: 'Bran Stark', age: 18, phone: '0800999999', email: 'bran@stark.com', access: 'Admin' },
];


const ManagerAccountPage = () => {
const [accounts, setAccount] = useState([]);
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        setAccount(response.data)
    })
},[])

  return (
    <Box sx={{ padding: 4, backgroundColor: '#fff', minHeight: '100vh', color: '#333' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Account Management
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Managing the Team Members
      </Typography>

      {/* Team Table */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="right">Access Level</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accounts.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="right">{row.username}</TableCell>
                      <TableCell align="right">{row.address.street}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell align="right">{row.access}</TableCell>
                      <TableCell align="right" >
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ marginRight: 1, backgroundColor: '#007BFF' }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ marginRight: 1 }}
                        >
                          {row.access === 'Admin' ? 'Admin' : 'Manage'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagerAccountPage;
