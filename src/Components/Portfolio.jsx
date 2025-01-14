import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import Details from "./Details";
import { useState } from "react";



export default function Portfolio() {
  const [nameSelectedItem, setNameSelectedItem] = useState('');
  const portfolioData =  [
    {
      name: "LOG CABIN",
      src: img1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "TASTY CAKE",
      src: img2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "CIRCUS TENT",
      src: img3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "CONTROLER",
      src: img4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "LOCKED SAFE",
      src: img5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "SUBMARINE",
      src: img6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
  ];
  return <>
   <div className="container mx-auto py-24">
  <h2 className="font-bold text-secondary text-6xl mt-7 mb-2 tracking-widest uppercase text-center">
    PORTFOLIO
  </h2>
  <div className="relative flex items-center justify-center my-5">
    <div className="w-32 h-1 rounded-md bg-secondary me-3"></div>
    <i className="fa-solid fa-star text-secondary text-3xl"></i>
    <div className="w-32 h-1 rounded-md bg-secondary ms-3"></div>
  </div>

  <div className="flex flex-wrap -mx-5">
    { portfolioData.map((item, index) => (
      <div
        key={index}
        className="relative w-full md:w-1/2 lg:w-1/3 mb-12 px-5"
        onClick={() => setNameSelectedItem(item.name)}
      >
        <div className="relative">
        
          <img
            className="w-full rounded-xl"
            src={item.src}
            alt={` ${ item.name}`}
          />

          <div className="absolute inset-0 bg-primary flex justify-center items-center opacity-0 hover:opacity-80 transition-opacity duration-500 rounded-xl">
            <i className="fa-solid fa-plus text-7xl text-white"></i>
          </div>
        </div>
      </div>
    ))}
  </div>
  

  {nameSelectedItem && (
        <Details
          name={nameSelectedItem}
          src={portfolioData.find((item) => item.name === nameSelectedItem).src}
          description={
            portfolioData.find((item) => item.name === nameSelectedItem)
              .description
          }
          onClose={() => setNameSelectedItem(null)}
        />
      )}
</div>
  </>;
}