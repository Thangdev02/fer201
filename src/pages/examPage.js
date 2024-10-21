import React, { useState } from "react";
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
    Box,
    Paper,
} from "@mui/material";

const ExamComponent = () => {
    // Sample data
    const data = [
        { id: 1, name: "ITEM 1", description: "Description for Item 1" },
        { id: 2, name: "Item 2", description: "Description for Item 2" },
        { id: 3, name: "Item 3", description: "Description for Item 3" },
        { id: 4, name: "Item 4", description: "Description for Item 4" },
        { id: 5, name: "Item 5", description: "Description for Item 5" },
        { id: 6, name: "Item 6", description: "Description for Item 6" },
        { id: 7, name: "Item 7", description: "Description for Item 7" },
        { id: 8, name: "ABC", description: "Description for Item 8" },
        { id: 8, name: "ABC", description: "Description for Item 9" },

    ];
    console.log(data);

    // State for search and results
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [count, setCount] = useState(0);

    // Handle search
    const handleSearch = () => {
        const filteredResults = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
    };

    // Handle item click
    const handleItemClick = (item) => {
        alert(`You clicked on ${item.name}: ${item.description}`);
    };

//i want if count is = 10 then Toast "Congratulation" and reset to 0
    const countTang = () => {
        setCount(preCount => preCount + 1)
    }
    const countGiam = () => {
        setCount(preCount => preCount - 1)
    }
    //help me create function target input
    const handleInput = (e) => {
        setSearchTerm(e.target.value);
        handleSearch();
        console.log(e.target.value);
    }
    //help me create filter 
    


    return (
        <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", borderRadius: 2}}>
            <Typography variant="h5" gutterBottom>
                Example Component
            </Typography>

            {/* Count Section */}
            <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", borderRadius: 2, display:'flex', alignItems:'center'  }}>
            <Button onClick={countGiam}>Giam</Button>
                <Typography> {count}</Typography>
                <Button onClick={countTang}>Tang</Button>
            </Box>
            {/* Search Section */}
            <Box sx={{ display: "flex", marginBottom: 2 }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onInput={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ flexGrow: 1, marginRight: 1 }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Box>

            
            {/* Search Results */}
            <Paper sx={{ padding: 2, marginBottom: 3, backgroundColor: "#fff" }}>
                <Typography variant="h6" gutterBottom>
                    Search Results
                </Typography>
                <List>
                    {results.length > 0 ? (
                        results.map((item) => (
                            <ListItem button key={item.id} onClick={() => handleItemClick(item)}>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ))
                    ) : (
                        <ListItem>
                            <ListItemText primary="No results found" />
                        </ListItem>
                    )}
                </List>
            </Paper>

            {/* 1-1 Mapping Example */}
            <Paper sx={{ padding: 2, marginBottom: 3, backgroundColor: "#fff" }}>
                <Typography variant="h6" gutterBottom>
                    All Items (1-1 Mapping)
                </Typography>
                <List>
                    {data.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.name} secondary={item.description} />
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <div style={{backgroundColor: "green", color: "white", padding: 10}}>
                {data.map((child) => (
                    <div key={child.id}>
                        <h3>{child.id}</h3>
                        <h4>{child.name}</h4>
                        <p>{child.description}</p>
                        </div>
                ))}
            </div>

            {/* Multiple Mapping Example */}
            <Paper sx={{ padding: 2, backgroundColor: "#fff" }}>
                <Typography variant="h6" gutterBottom>
                    Item Names (Multiple Mapping)
                </Typography>
                <List>
                    {data.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`Index: ${index}: ${item.description}`} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default ExamComponent;
