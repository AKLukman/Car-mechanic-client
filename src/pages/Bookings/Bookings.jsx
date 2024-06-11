import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Booking from "./Booking";
import useAxuosSecure from "../../hooks/useAxuosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxuosSecure();
  const url = `/bookings?email=${user?.email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBookings(data);
  //     });
  // }, [url]);

  axiosSecure.get(url).then((res) => setBookings(res.data));

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingBookings = bookings.filter(
            (booking) => booking._id !== id
          );
          setBookings(remainingBookings);
        }
      });
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const reamaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...reamaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Service</th>
            <th>Price</th>
            <th>Date</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
          ></Booking>
        ))}
      </table>
    </div>
  );
};

export default Bookings;
