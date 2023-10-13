import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const BASE_URL = "https://backend-2ayp.onrender.com";

const loaderStyle = {
  margin: "10px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "orange",
};
const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  backgroundColor: "red",
  width: "auto",
  height: "auto",
  padding: "10px",
  margin: "10px",
  borderRadius: "5px",
};
const cardStyle = {
  padding: "10px",
  backgroundColor: "magenta",
  borderRadius: "6px",
};

const headerStyle = {
  backgroundColor: "orange",
  width: "25vw",
  padding: "12px",
  margin: "10px",
  borderRadius: "5px",
};

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/data`)
      .then((response) => {
        console.log(response.data);
        setError(false);
        setData(response.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <h2>Error occured.</h2>;
  }

  if (isLoading) {
    return <h3 style={loaderStyle}>Loading...</h3>;
  }
  return (
    <>
      <div style={headerStyle}>{`Name of ${data.length} students.`}</div>
      <div style={divStyle}>
        {data.map((student) => (
          <Card student={student} key={student.id} />
        ))}
      </div>
    </>
  );
}

export default App;
