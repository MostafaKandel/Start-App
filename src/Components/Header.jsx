
import headerImg from "../assets/images/header.svg";

export default function Header() {
  return <>
<header className="bg-primary  py-24">
  <div className="container mx-auto flex flex-col items-center justify-center">
    <img className="w-64" src={headerImg} alt="Header Image" />
    <h1 className="text-white font-bold text-6xl mt-7 mb-2 uppercase text-center">
      START REACT
    </h1>
    <div className="relative flex items-center justify-center my-5">
      <i className="fa-solid fa-star text-white text-3xl"></i>
      <div className="title-underline before:bg-white after:bg-white"></div>
    </div>
    <p className="text-white text-lg font-medium text-center">
      Graphic Artist - Web Designer - Illustrator
    </p>
  </div>
</header>
  </>;
}