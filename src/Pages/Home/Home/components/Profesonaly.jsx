import beautyImg from "../../../../assets/beauty.png";

const Profesonaly = () => {
  return (
    <div className="pt-32 md:grid grid-cols-2 gap-24 p-10 bg-[#FFF8F5]">
      <div className="beautyImg">
        <img src={beautyImg} alt="beautyImg" />
      </div>
      <div className="beautyText">
        <h2 className="text-4xl font-bold">
          Let us handle your screen
          <span className="text-[#F63E7B] "> Professionally.</span>
        </h2>
        <p className="mt-8 text-md text-[#000000B3] md:max-w-[400px]">
          With well written codes, we build amazing apps for all platforms,
          mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Purus commodo ipsum.
        </p>
        <div className="mt-10 flex gap-24">
          <div>
            {" "}
            <h2 className="text-4xl text-[#F63E7B] font-bold">500+</h2>
            <p>Happy Customers</p>
          </div>
          <div>
            {" "}
            <h2 className="text-4xl text-[#F63E7B] font-bold">16+</h2>
            <p>Total Servics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profesonaly;
