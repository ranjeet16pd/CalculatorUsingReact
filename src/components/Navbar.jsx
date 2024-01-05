
const Navbar=()=>{
    return (
      <>
      <div className="nav flex justify-between shadow-2xl text-white bg-slate-700">
        <div className="p-4 px-12">
          <h1 className="text-1xl">My Calculator</h1>
        </div>
        <ul className="py-4 space-x-14 px-10 text-1xl" >
          <button>
          <l1>Home</l1>
          </button>
          <button>
          <l1>Contact</l1>
          </button>
          <button>
          <l1>about</l1>
          </button>
          
          
        </ul>
      </div>
      </>
    )
  }

  
  export default Navbar;