import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import AddOrchidModal from './addOrchid'; // Ensure to import your modal
import axios from 'axios';
import UpdateOrchidModal from './updateOrchid';

const ListOrchid = ({ orchids, refreshOrchids }) => {
    const [modalOpen, setModalOpen] = useState(false); // State to manage add modal visibility
    const [updateModalOpen, setUpdateModalOpen] = useState(false); // State to manage update modal visibility
    const [selectedOrchid, setSelectedOrchid] = useState(null); // State to hold the selected orchid

    const handleAddOrchid = () => {
        setModalOpen(false); // Close the modal after adding
        refreshOrchids(); // Refresh the orchid list after adding
    };

    const handleUpdateOrchid = (orchid) => {
        setSelectedOrchid(orchid); // Set the selected orchid for updating
        setUpdateModalOpen(true); // Open the update modal
    };

    const handleDeleteOrchid = async (id) => {
        try {
            await axios.delete(`https://670f94ee3e71518616588d3a.mockapi.io/orchids/${id}`);
            refreshOrchids(); // Refresh the list after deleting
        } catch (error) {
            console.error('Error deleting orchid:', error);
            alert('Failed to delete orchid.'); // Optional: alert the user on error
        }
    };

    return (
        <div>
            {/* Button to add an orchid */}
            <Button
                variant="contained"
                color="primary"
                onClick={() => setModalOpen(true)}
                sx={{ marginBottom: 2 }}
            >
                Add Orchid
            </Button>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Is Natural</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orchids.map((orchid) => (
                            <TableRow key={orchid.id}>
                                <TableCell>{orchid.name}</TableCell>
                                <TableCell>{orchid.color}</TableCell>
                                <TableCell>{orchid.description}</TableCell>
                                <TableCell>{orchid.isNatural ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => handleUpdateOrchid(orchid)} // Call update function
                                    >
                                        Update
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="error" 
                                        sx={{ marginLeft: 1 }} 
                                        onClick={() => handleDeleteOrchid(orchid.id)} // Call delete function
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Add Orchid Modal */}
            <AddOrchidModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
                refreshOrchids={handleAddOrchid} // Pass the refresh function to the modal
            />

            {/* Update Orchid Modal */}
            <UpdateOrchidModal
                open={updateModalOpen}
                handleClose={() => setUpdateModalOpen(false)}
                orchid={selectedOrchid} // Pass the selected orchid
                refreshOrchids={refreshOrchids} // Pass the refresh function to the modal
            />
        </div>
    );
};

export default ListOrchid;
