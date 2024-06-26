import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative lg:w-1/2">
          <img src={person} className=" rounded-lg shadow-2xl w-3/4" />

          <img
            src={parts}
            alt=""
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-3xl font-bold text-orange-500">About us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
