import { useState, useEffect } from "react";

const UserCounter = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({ user: "", email: "", city: "", phn: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        const json = await data.json();
        console.log(json);
        setUser(json);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchUserData();
  }, [count]);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-container">
          <h1>{count}</h1>
          <h1 className="username">{user.name}</h1>
          <p>Email: {user.email}</p>
          <div className="button-container">
            <button className="button" onClick={increment}>
              +
            </button>
            <button className="button" onClick={decrement}>
              -
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCounter;
