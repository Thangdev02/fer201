import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Switch, FormControlLabel } from '@mui/material';
import axios from 'axios';

const AddOrchidModal = ({ open, handleClose, refreshOrchids }) => {
    const [orchidData, setOrchidData] = useState({
        name: '',
        color: '',
        description: '',
        isNatural: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setOrchidData({
            ...orchidData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://670f94ee3e71518616588d3a.mockapi.io/orchids', orchidData);
            handleClose(); // Close the modal after adding
            refreshOrchids(); // Refresh the orchid list
        } catch (error) {
            console.error('Error adding orchid:', error);
        }
    };
    

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Orchid</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={orchidData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Color"
                        name="color"
                        value={orchidData.color}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={orchidData.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={orchidData.isNatural}
                                onChange={handleChange}
                                name="isNatural"
                            />
                        }
                        label="Is Natural"
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddOrchidModal;
