

export function Contact() {
  return <>
  <section className="bg-white py-16">
    <div className="container mx-auto flex flex-col items-center justify-center">  
      <h2 className="text-secondary font-bold text-6xl mt-7 mb-2 uppercase text-center">
         CONTACT ME
      </h2>
      <div className="relative flex items-center justify-center my-5">
        <i className="fa-solid fa-star text-secondary text-3xl"></i>
        <div className=" title-underline before:bg-secondary after:bg-secondary"></div>
      </div>

      <form className="mx-auto w-1/2">
        <input class="appearance-none text-2xl mb-8 bg-transparent border-none font-medium w-full text-[#6C757D] mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="NAME" aria-label="Full name"></input>
        <input class="appearance-none text-2xl mb-8 bg-transparent border-none font-medium w-full text-[#6C757D] mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Full name"></input>
        <input class="appearance-none text-2xl mb-8 bg-transparent border-none font-medium w-full text-[#6C757D] mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone Number" aria-label="Full name"></input>
        <input class="appearance-none text-2xl mb-8 bg-transparent border-none font-medium w-full text-[#6C757D] mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Message" aria-label="Full name"></input>
  
  <button type="submit" className="mt-16  p-6 text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-xl w-full sm:w-auto text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Send</button>
      </form>
    </div>
  </section>
  </>;
}