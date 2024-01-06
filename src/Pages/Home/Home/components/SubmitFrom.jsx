import "../components/SubmitFrom.css";

const SubmitFrom = () => {
  return (
    <div className="hero md:pt-24 pt-6  bg-[#FFF8F5]">
      <div className="hero-content flex-col ">
        <div className="text-center md:pb-10 max-w-[450px] ">
          <h1 className=" text-xl md:text-4xl text-[#2D2D2D] font-bold">
            Let us handle your screen, professionally.
          </h1>
        </div>
        <div className="card shrink-0 w-full gap-4 ">
          <form className="card-body ">
            <div className="md:flex gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input  md:w-96"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input  md:w-96"
                required
              />
            </div>

            <div className="md:flex gap-4 ">
              <input
                type="email"
                placeholder="Email Address"
                className="input mb-4 md:w-96"
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="input mb-4 md:w-96"
                required
              />
            </div>
            <div className="form-control mt-6">
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="10"
                placeholder="Your Message"
                className="p-4"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="mt-6 w-40 rounded-lg mx-auto cursor-pointer  py-3 bg-[#F63E7B] text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitFrom;
