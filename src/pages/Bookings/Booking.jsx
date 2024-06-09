const Booking = ({ booking, handleDelete, handleConfirm }) => {
  const { img, service, date, email, price, _id, status } = booking;

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
            </div>
          </div>
        </td>
        <td>$ {price}</td>
        <td>{date}</td>
        <td>{email}</td>

        <th>
          {status === "confirm" ? (
            <span className="font-bold text-green-800">Confirmed</span>
          ) : (
            <button
              onClick={() => handleConfirm(_id)}
              className="btn  btn-warning"
            >
              Confirm
            </button>
          )}
        </th>
      </tr>
    </tbody>
  );
};

export default Booking;
