import axios from "axios";
import { useState } from "react";

export default function Multiple_API() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const promise1 = axios.get("https://api.github.com/users/defunkt");
    const promise2 = axios.get("https://api.github.com/users/evanphx");
    const promise3 = axios.get("https://api.github.com/users/chandu09052002");
    const responseArr = await axios.all([promise1, promise2, promise3]);
    console.log(responseArr)
    let responseData = responseArr.map((response) => response.data);
    console.log(responseData);
    setData(responseData);
  };

  return (
    <>
      <div>Fetch Data From Multiple APIs and display on the screen</div>

      <button onClick={fetchData}>Fetch Data</button>

      <table className="table table-bordered">
        <tbody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.login}</td>
                <td>{obj.bio}</td>
                <td>{obj.email}</td>
                <td>{obj.public_repos}</td>
                <td>{obj.followers}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
