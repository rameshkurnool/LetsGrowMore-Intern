import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);

    const response = await fetch("https://reqres.in/api/users?page=1");
    const { data } = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="navbar-brand">LetsGrowMore</span>
        <button className="btn" onClick={getUsers}>
          Get Users
        </button>
      </nav>

      {loading ? (
        <div className="loader">Getting...</div>
      ) : (
        <div className="card-grid">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h2>
                {user.first_name} {user.last_name}
              </h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
