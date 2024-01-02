import bannerImg from "../../../../assets/women1.png";

const Banner = () => {
  return (
    <div className="bg-[#FFF8F5]">
      <div className="bannerMain md:flex justify-between p-4 items-center md:grid-cols-2 mb-6">
        <div className="bannerText ">
          <h2 className="text-5xl font-bold pb-4">BEAUTY SALON</h2>
          <h2 className="text-5xl font-bold ">FOR EVERY WOMEN</h2>
          <p className="pt-6 md:max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <button className=" rounded-lg mt-4 text-white bg-[#F63E7B] px-8 py-3">
            Get an Appointment{" "}
          </button>
        </div>
        <div className="bannerImage">
          <img src={bannerImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
