import axios from "axios";
import { useEffect, useState } from "react";

const Services = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("Servics.json").then((data) => setMenu(data.data));
  }, []);
  // console.log(menu)
  return (
    <div>
      <h2 className="text-4xl text-center  md:pt-20 md:pb-20 text-[#111430] font-bold">
        Our Awesome <span className="text-[#F63E7B]">Services</span>
      </h2>

      {/** Servics card here */}
      <div className="md:grid grid-cols-3 gap-4">
        {menu.map((items) => (
          <div key={items.id} className="card boxHover p-2">
            <figure>
              <img src={items.photo} alt="Shoes" />
            </figure>
            <div className="card-body text-center ">
              <h2 className="text-[#F63E7B] text-xl font-semibold">
                ${items.price}
              </h2>
              <h2 className="text-[#111430] text-xl font-bold ">
                {items.title}
              </h2>
              <p>{items.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 mb-4 text-center">
        <button className="py-4 px-8 rounded-lg text-white bg-[#F63E7B] mb-3 ">
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Services;
