

export default function Footer() {
  return <>
   <footer className="pt-16 bg-secondary text-white text-center">
  <div className="container mx-auto px-4 mb-20">
    <div className="flex flex-wrap">
      
      <div className="w-full lg:w-1/3 my-6 ">
        <div>
          <h4 className="text-3xl font-bold uppercase mb-4">Location</h4>
          <p>
            2215 John Daniel Drive <br />
            Clark, MO 65243
          </p>
        </div>
      </div>
      
      <div className="w-full lg:w-1/3 my-6">
        <div >
          <h4 className="text-3xl font-bold uppercase mb-8">Around the web</h4>
          <ul className="flex justify-center space-x-4">
            <li className="w-14 group h-14 rounded-full border border-white flex justify-center items-center transition-all duration-300 hover:bg-white">
              <a href="#">
                <i className="fa-brands fa-facebook-f text-lg text-white group-hover:text-black"></i>
              </a>
            </li>
            <li className="w-14 group h-14 rounded-full border border-white flex justify-center items-center transition-all duration-300 hover:bg-white">
              <a href="#">
                <i className="fa-brands fa-twitter text-lg text-white group-hover:text-black"></i>
              </a>
            </li>
            <li className="w-14 group h-14 rounded-full border border-white flex justify-center items-center transition-all duration-300 hover:bg-white">
              <a href="#">
                <i className="fa-brands fa-linkedin-in text-lg text-white group-hover:text-black"></i>
              </a>
            </li>
            <li className="w-14 group h-14 rounded-full border border-white flex justify-center items-center transition-all duration-300 hover:bg-white">
              <a href="#">
                <i className="fa-brands fa-youtube text-lg text-white group-hover:text-black"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
     
      <div className="w-full lg:w-1/3 my-6">
        <h4 className="text-3xl font-bold uppercase mb-4">About freelancer</h4>
        <p className="font-bold">
          Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh
        </p>
      </div>
    </div>
  </div>
   
  <div className="mt-12 bg-[#1a252f] text-white">
    <p className="p-6 text-base">Copyright © Hamza Nouh 2022</p>
  </div>
</footer>
  </>;
}