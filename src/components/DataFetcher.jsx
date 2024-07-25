import { createSignal, createEffect } from "solid-js";

const DataFetcher = () => {
  const [data, setData] = createSignal([]);
  const [error, setError] = createSignal(null);
  const [loading, setLoading] = createSignal(true);


  createEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/datatester/usertest.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.user); // Update to access user array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });



  return (
    <div>
      {loading() && <p>Loading...</p>}
      {error() && <p>Error: {error}</p>}
      <ul>
        {Array.isArray(data()) && data().length > 0 ? (
          data().map((user, index) => (
            <li key={index}>
              {user.email}, {user.password}
            </li>
          ))
        ) : (
          <li>No users available</li>
        )}
      </ul>
    </div>
  );
};

export default DataFetcher;
