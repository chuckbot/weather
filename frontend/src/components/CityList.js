import React, { useEffect, useState } from "react";

export default function CityList() {
  const [cities, setCities] = useState([]);
  const loadTask = async () => {
    const response = await fetch("http://localhost:8000/cities");
    const data = await response.json();
    setCities(data);
  };
  useEffect(() => {
    loadTask();
  }, []);
  return (
    <>
      <p>Task List</p>
      {cities.map((city) => (
        <p>{city.temp}</p>
      ))}
    </>
  );
}
