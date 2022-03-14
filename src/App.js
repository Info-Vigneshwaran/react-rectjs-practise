import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetch_Data = fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setLists(json);
      });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <td>ID</td>
          <td>Nam</td>
          <td>ID</td>
        </tr>
        {lists &&
          lists.map((item) => (
            <tr key={item.id}>
              <td>
                <span>
                  {item.id} - {item.id}
                </span>
              </td>
              <td>
                <span>
                  {item.id} - {item.id}
                </span>
              </td>
              <td>
                <span>
                  {item.id} - {item.id}
                </span>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
