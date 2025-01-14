 

export default function Details( {name,src,description,onClose} ) {
   
    return <>
    <div  className="fixed bg-black bg-opacity-50 inset-0 items-center z-50">
    <div class="relative opacity-100 bg-white rounded-lg shadow p-10  w-[60%] mx-auto ">
    <button
          type="button"
          className="absolute top-4 right-6 text-xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          X
        </button>
            <div class="flex flex-col items-center text-center">
                <h3 class="text-5xl font-extrabold text-secondary ">
                    {name}
                </h3>
               
                <div className="relative flex items-center justify-center my-5">
                <div className="w-32 h-1 rounded-md bg-secondary me-3"></div>
                <i className="fa-solid fa-star text-secondary text-3xl"></i>
                <div className="w-32 h-1 rounded-md bg-secondary ms-3"></div>
     
            </div>
            </div>
            <div class="mt-6">
                <img className="w-3/5 h-72 mx-auto rounded-lg" src={src} alt={name} />
            </div>
            <div className="mt-6 w-4/5 mx-auto">
                <p>{description}</p>
            </div>
    </div>
    </div>   
    </>
}