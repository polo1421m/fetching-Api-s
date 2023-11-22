import React, { useState, useEffect } from "react";

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} {list.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
