import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";

export default function CardOrchid({ orchid }) {
  const { name, color, description, isNatural, image } = orchid;

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={image}
        alt={name}
      />
      {/* Conditionally render the Chip at the top-right corner */}
      {isNatural && (
        <Chip 
          label="Natural" 
          color="primary" 
          sx={{ 
            position: "absolute", 
            top: 8, 
            right: 8, 
            zIndex: 1 
          }} 
        />
      )}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent>
          <Typography component="div" variant="h4">
            {name}
          </Typography>
          <Typography component="div" variant="h6">
            {color}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
