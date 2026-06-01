import React, { useEffect } from "react";
import Loading from "./Loading";
import ServerError from "./ServerError";
import { toast } from "react-toastify";

const Owasp = ({ owasp, loaded }) => {
    useEffect(()=>{
        if (!loaded) return;
           else owasp.length > 0 ? toast.success("Welcome to OWASP 😎", { toastId: "owasp-success" }) : toast.error("Couldn't load OWASP, Please try again later", { toastId: "owasp-failure" })
        
    }, [loaded])
    
  return (
    <>
        <div className="all flex flex-col items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pb-5 justify-around min-h-screen gap-4 bg-(--color-container) mt-20 rounded-3xl">
            <h2 className="">OWASP top 10</h2>
    {
        loaded ?owasp.length >0 ? 
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 max-w-[95%] lg:grid-cols-4">

            {owasp.map((e ,i)=>(
    
                
                <div className=" w-lg  px-8 py-8 mx-auto bg-(--color-bg-color) shadow-xl text-(--color-important) hover:shadow-[0_0_10px_var(--color-hover)] hover:scale-104 transition-all lg:nth-9:col-start-2 max-w-[95%] rounded-4xl" key={e.id}>
              <div className="max-w-md mx-auto space-y-6 ">
                <h3 className="text-2xl font-bold">{++i}. {e.name}</h3>
                <div className="text-base leading-3">
                  <p className="font-normal text-(--color-text-color) leading-5">
                    {e.description}
                  </p>
                </div>
    
                <div className="text-base leading-3">
                  <p className="font-normal text-(--color-text-color) leading-5">
                    {e.examples?.[0]}
                  </p>
                </div>
    
                <div className="text-base leading-3">
                  <p className="font-normal text-(--color-text-color) leading-5">
                    {e.examples?.[1] }
                  </p>
                </div>
    
                
    
                
              </div>
            </div>
            
            ))}
        </div>
        :
      <ServerError/>:<Loading/>
    }
    </div>
      
    </>
  );
};

export default Owasp;
