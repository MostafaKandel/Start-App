
export function About() {
  return <>
  <section className="bg-primary py-16">
    <div className="container mx-auto flex flex-col items-center justify-center ">
       
      <h2 className="text-white font-bold text-6xl mt-7 mb-2  uppercase text-center">
        ABOUT
      </h2>
      <div className="relative flex items-center justify-center my-5">
        <i className="fa-solid fa-star text-white text-3xl"></i>
        <div className="title-underline before:bg-white after:bg-white"></div>
      </div>
      <div className="row py-24 px-48 text-white text-l">
        <div className="w-1/6"></div>
        <div className="w-full mb-12 lg:w-1/3 px-4 lg:mb-4">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-4">
        <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="w-1/6"></div>

      </div>
    </div>
  </section>
  </>;
}