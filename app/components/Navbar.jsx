import React from "react";

function Navbar({ scrollToSection }) {
  const Items = [
    { title: "Home", ref: React.createRef() },
    { title: "Our Services", ref: React.createRef() },
    { title: "Surface of Application", ref: React.createRef() },
    { title: "About Us", ref: React.createRef() },
    { title: "Contact Us", ref: React.createRef() },
  ];

  const [active, setActive] = React.useState(Items[0].title);

  const handleItemClick = (item) => {
    setActive(item.title);
    scrollToSection(item.ref);
  };

  return (
    <nav className="w-screen h-32 md:flex hidden  shadow-md flex-row">
      <div className="text-4xl ml- bg-white pl-52 px-20 h-full flex justify-center items-center">
        <img src="/logo.png" alt="" />
      </div>
      <div className="flex flex-col w-full ">
        <div className="bg-yellow-300 w-full h-10 ">
          <div className=" pl-10">sss</div>
        </div>
        <div className="pt-3 w-full h-12 px-10 flex flex-row items-center ">
          {Items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="mx-10  hover:text-blue-500 cursor-pointer"
            >
              <h1
                className={`font-semibold ${
                  active === item.title ? "text-blue-500" : ""
                }`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
