import React, { useEffect, useState } from "react";
import CardCountry from "../components/cardCountry";
import axios from "axios";
import { Box } from "@mui/material";

const HomeCountryPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://6700b6964da5bd2375549d94.mockapi.io/Countries")
      .then((response) => {
        setCountries(response.data);
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
        {countries.map((country) => (
          <CardCountry key={country.id} country={country} />
        ))}
      </Box>
    </div>
  );
};

export default HomeCountryPage;
