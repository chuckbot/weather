import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function CityList() {
  const [cities, setCities] = useState([]);

  const loadTask = async () => {
    const response = await fetch("http://localhost:8000/cities");
    const data = await response.json();
    setCities(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });

      setCities(cities.filter((city) => city.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <>
      <h2>City List</h2>
      {cities.map((city) => (
        <Card
          style={{
            margin: "1rem 0 .7rem 0",
            backgroundColor: "rgba(255,255,255, 0.2)",
          }}
          key={city.id}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ color: "#fff" }}>
              <Typography>{city.city_name}</Typography>
              <Typography>{city.temp}</Typography>
              <Typography>{city.humidity}</Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(city.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
