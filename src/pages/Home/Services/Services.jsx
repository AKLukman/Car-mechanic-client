import Service from "./Service";
import useServices from "../../../hooks/useServices";
import { useState } from "react";

const Services = () => {
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const services = useServices(asc, search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  return (
    <div>
      <div className="mt-4 text-center">
        <h3 className="text-3xl text-orange-500">Service</h3>
        <h3 className="text-5xl">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised<br></br> words which do not look even slightly
          believable.
        </p>
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-outline btn-secondary"
        >
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
        <p>Min to max</p>
        <div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="grow"
              placeholder="Search"
              name="search"
            />

            <input
              className="btn btn-outline btn-success"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
