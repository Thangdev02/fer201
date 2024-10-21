import React, { useState, useEffect } from 'react';
import ListOrchid from '../../components/manager/listOrchid';
import axios from 'axios';

const ManageOrchid = () => {
    const [orchids, setOrchids] = useState([]); // State to hold the list of orchids

    // Function to fetch orchids from the API
    const fetchOrchids = async () => {
        try {
            const response = await axios.get('https://670f94ee3e71518616588d3a.mockapi.io/orchids');
            // Sort orchids by ID in descending order
            const sortedOrchids = response.data.sort((a, b) => b.id - a.id);
            setOrchids(sortedOrchids); // Update the orchids state with the sorted data
        } catch (error) {
            console.error('Error fetching orchids:', error);
        }
    };

    useEffect(() => {
        fetchOrchids(); // Fetch orchids when the component mounts
    }, []);

    return (
        <div>
            <ListOrchid orchids={orchids} refreshOrchids={fetchOrchids} /> {/* Pass the refresh function */}
        </div>
    );
};

export default ManageOrchid;
