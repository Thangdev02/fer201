// UpdateOrchidModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Switch, FormControlLabel } from '@mui/material';
import axios from 'axios';

const UpdateOrchidModal = ({ open, handleClose, orchid, refreshOrchids }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [isNatural, setIsNatural] = useState(false);

    useEffect(() => {
        if (orchid) {
            setName(orchid.name);
            setColor(orchid.color);
            setDescription(orchid.description);
            setIsNatural(orchid.isNatural);
        }
    }, [orchid]);

    const handleUpdate = async () => {
        try {
            await axios.put(`https://670f94ee3e71518616588d3a.mockapi.io/orchids/${orchid.id}`, {
                name,
                color,
                description,
                isNatural,
            });
            refreshOrchids(); // Refresh the orchid list after updating
            handleClose(); // Close the modal
        } catch (error) {
            console.error('Error updating orchid:', error);
            alert('Failed to update orchid.'); // Optional: alert the user on error
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1, maxWidth: 400, margin: 'auto' }}>
                <h2>Update Orchid</h2>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Color"
                    variant="outlined"
                    fullWidth
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={isNatural}
                            onChange={(e) => setIsNatural(e.target.checked)}
                        />
                    }
                    label="Is Natural"
                />
                <Button variant="contained" color="primary" onClick={handleUpdate} fullWidth>
                    Update
                </Button>
            </Box>
        </Modal>
    );
};

export default UpdateOrchidModal;
