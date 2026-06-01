import React, { useEffect, useState } from "react";
import ServerError from "./ServerError";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Disclosures = ({ disclosures, load }) => {
  const [query, setQuery] = useState("");
  const imageRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/i;
  useEffect(() => {
    if (!load) return;
    else
      disclosures.length > 0
        ? toast.success("Welcome to Disclosures 😎", { toastId: "disclosures-success" })
        : toast.error("Couldn't load Disclosures, Please try again later", {
            toastId: "disclosures-failure",
          });
  }, [load]);

    const filterResult = (disclosures || []).filter((e) =>
      (e.title|| "").toLowerCase().includes(query.toLowerCase()),
    );
  

  return (
    <React.Fragment>
      <div className="all min-h-screen mt-20 mb-7  w-[95%] m-auto rounded-3xl bg-(--color-container)">
        <h2 className=" text-5xl font-extrabold text-center p-7">
          Latest Disclosures
        </h2>
        <div className="btns w-full flex justify-center gap-1">
          <input
            type="text"
            placeholder="Search disclosures..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-(--color-bg-color) focus:border-(--color-hover) focus:outline-none pl-3 pr-3 pt-1.5 pb-1.5 border border-(--color-hover) rounded-2xl focus:shadow-[0_0_10px_var(--color-hover) ]"
          />
        </div>
        {load ? (
          disclosures && disclosures.length > 0 ? (
            <div className="container pb-7 md:grid-cols-2 grid-cols-1 grid gap-4 lg:grid-cols-4  mt-5 m-auto w-full ">
              {(query === "" ? disclosures : filterResult).map((e) => {
                const match = e.content?.match(imageRegex);
                const imgUrl = match
                  ? match[1]
                  : "https://placehold.co/600x400/1e1e1e/fff?text=Bug+Bounty+Report";
                return (
                  <div
                    className="card relative hover:shadow-[0_0_10px_var(--color-hover)] hover:scale-104 min-h-120 justify-around flex-col w-[95%] [&:nth-child(9)]:lg:col-start-2 bg-(--color-bg-color) block max-w-sm border border-(--color-hover) rounded-2xl overflow-hidden shadow-xs transition-all duration-300 m-auto"
                    key={e.guid}
                  >
                    <a href={e.link}>
                      <img
                        className="rounded-t-base h-60 object-cover w-full"
                        src={imgUrl}
                        alt=""
                      />
                    </a>
                    <div className="p-6 text-center">
                      <a href={e.link}>
                        <h5 className="mt-3 hover:text-(--color-hover) line-clamp-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
                          {e.title}
                        </h5>
                      </a>
                      <a
                        href={e.link}
                        className="inline-flex top-[80%] left-1/2 text-nowrap -translate-x-1/2 absolute items-center cursor-pointer hover:bg-(--color-hover) bg-(--color-important) rounded-xl text-(--color-text-color) box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
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
                );
              })}
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

export default Disclosures;
