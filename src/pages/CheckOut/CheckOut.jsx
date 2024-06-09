import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const CheckOut = () => {
  const data = useLoaderData();
  const { _id, title, price, img } = data;
  const { user } = useContext(AuthContext);

  const handleOredr = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      serviceId: _id,
      price,
    };
    console.log(order);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1 className="text-center text-3xl">Book Service: {title}</h1>

      <form onSubmit={handleOredr} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$ " + price}
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary btn block">Order Confirmed</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
