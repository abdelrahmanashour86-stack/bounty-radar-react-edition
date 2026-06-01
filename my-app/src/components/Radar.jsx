import React, { useEffect } from "react";
import ServerError from "./ServerError";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Radar = ({ news, load }) => {
  useEffect(()=> {
    if(!load) return;
    else news.length > 0
    ? toast("Welcome to Radar 😎", { toastId: "radar-success" })
    : toast.error("Couldn't load news, Please try again later", { toastId: "radar-failure" })
  },[])
  
  return (
    <React.Fragment>
      <div className="all min-h-screen mt-20 mb-7  w-[95%] m-auto rounded-3xl bg-(--color-container)">
        <h2 className="dark:text-(--color-text-color) text-5xl font-extrabold text-center p-7">Radar</h2>
        {load ? (
          news && news.length > 0 ? (
            <div className="container pb-7 md:grid-cols-3 grid-cols-1 grid gap-4 lg:grid-cols-5 mt-5 m-auto w-full ">
              {news.map((e) => (
                <div
                  className="card hover:shadow-[0_0_10px_var(--color-hover)] hover:scale-104 w-[95%] lg:last:col-auto md:last:col-start-2 bg-(--color-bg-color) block max-w-sm border border-(--color-hover) rounded-2xl overflow-hidden shadow-xs transition-all duration-300 m-auto"
                  key={e.guid}
                >
                  <a href={e.link}>
                    <img
                      className="rounded-t-base"
                      src={e.enclosure.link}
                      alt=""
                    />
                  </a>
                  <div className="p-6 text-center">
                    <a href={e.link}>
                      <h5 className="mt-3 hover:text-(--color-hover) lg:line-clamp-4 line-clamp-5 mb-6 text-2xl font-semibold tracking-tight text-heading">
                        {e.title}
                      </h5>
                    </a>
                    <a
                      href={e.link}
                      className="inline-flex items-center cursor-pointer hover:bg-(--color-hover) bg-(--color-important) rounded-xl text-(--color-text-color) box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ServerError />
          )
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
};

export default Radar;
