import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import apiEndpoints from "../services/apiAuth";
import CardOrchid from "../components/orchidCard";

const HomePage = () => {

  const [orchid, setOrchid] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndpoints.orchid)
      .then((response) => {
        setOrchid(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Mỗi hàng có 4 cột
          gap: 2, // Khoảng cách giữa các thẻ
          padding: 2, // Padding xung quanh grid
          alignItems: "stretch", // Đảm bảo các thẻ có chiều cao bằng nhau
        }}
      >
        {orchid.map((orchid) => (
          <CardOrchid key={orchid.id} orchid={orchid} />
        ))}
      </Box>
    </div>
  );
};

export default HomePage;
