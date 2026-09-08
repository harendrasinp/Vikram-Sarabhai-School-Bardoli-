"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const SideBar_DeatilBar = ({ componentData, title }) => {
  const [aboutTitle, setAboutTitle] = useState(null);

  const responseData = componentData?.ResponseData || [];

  useEffect(() => {
    if (responseData.length > 0) {
      setAboutTitle(responseData[0].title);
    }
  }, [componentData]);

  const selectedData = responseData.find(
    (data) => data.title === aboutTitle
  );

  return (
    <section className="min-h-screen bg-slate-50">

      {/* ================= HERO HEADER ================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-100 to-blue-950">

        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-950/30" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-blue-950/30" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>

            <div>
              <p className="text-orange-400 text-sm font-medium uppercase tracking-wider">
                Discover
              </p>

              <h1 className="text-3xl md:text-5xl font-bold text-orange-400">
                {title}
              </h1>
            </div>

          </div>

          <p className="mt-5 max-w-2xl text-blue-100 text-sm md:text-base leading-7">
            Learn more about our institution, our vision, our values,
            and everything that makes our educational journey special.
          </p>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* ================= SIDEBAR ================= */}
          <aside className="lg:col-span-4">

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-5">

              {/* Sidebar Header */}
              <div className="bg-gradient-to-r from-blue-950 to-blue-900 px-5 py-4">

                <p className="text-xs uppercase tracking-wider text-blue-200 font-medium">
                  Explore
                </p>

                <h2 className="text-xl font-bold text-white mt-1">
                  {title}
                </h2>

              </div>

              {/* Navigation */}
              <div className="p-3">

                {responseData.length > 0 ? (
                  responseData.map((data, index) => {

                    const isActive = data.title === aboutTitle;

                    return (
                      <button
                        key={data._id || index}
                        onClick={() => setAboutTitle(data.title)}
                        className={`
                          group
                          w-full
                          flex
                          items-center
                          justify-between
                          gap-3
                          text-left
                          px-4
                          py-3.5
                          mb-1
                          rounded-xl
                          transition-all
                          duration-200
                          cursor-pointer
                          ${
                            isActive
                              ? "bg-blue-950 text-white shadow-md"
                              : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                          }
                        `}
                      >

                        <div className="flex items-center gap-3 min-w-0">

                          <div
                            className={`
                              w-8
                              h-8
                              rounded-lg
                              flex
                              items-center
                              justify-center
                              shrink-0
                              ${
                                isActive
                                  ? "bg-white/15"
                                  : "bg-slate-100 group-hover:bg-blue-100"
                              }
                            `}
                          >
                            <span
                              className={`
                                text-xs font-bold
                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-slate-500 group-hover:text-blue-600"
                                }
                              `}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <span className="font-medium text-sm md:text-base truncate">
                            {data.title}
                          </span>

                        </div>

                        <ChevronRight
                          className={`
                            w-5 h-5 shrink-0 transition-transform
                            ${
                              isActive
                                ? "text-white translate-x-1"
                                : "text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1"
                            }
                          `}
                        />

                      </button>
                    );
                  })
                ) : (
                  <div className="p-5 text-center text-slate-500 text-sm">
                    No information available.
                  </div>
                )}

              </div>

            </div>

          </aside>

          {/* ================= CONTENT ================= */}
          <main className="lg:col-span-8">

            <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

              {/* Content Header */}
              <div className="px-6 md:px-9 pt-7 md:pt-9">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-blue-700" />
                  </div>

                  <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                    {title}
                  </span>

                </div>

                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {selectedData?.title || "Information"}
                </h2>

                <div className="mt-5 h-1 w-16 rounded-full bg-blue-700" />

              </div>

              {/* Content Body */}
              <div className="px-6 md:px-9 py-7 md:py-9">

                {selectedData?.discription ? (
                  <div className="text-slate-600 text-base md:text-lg leading-8 whitespace-pre-line">
                    {selectedData.discription}
                  </div>
                ) : (
                  <div className="py-12 text-center">

                    <BookOpen className="w-10 h-10 mx-auto text-slate-300" />

                    <p className="mt-3 text-slate-400">
                      No information available for this section.
                    </p>

                  </div>
                )}

              </div>

              {/* Bottom Accent */}
              <div className="h-1.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700" />

            </div>

          </main>

        </div>

      </div>

    </section>
  );
};

export default SideBar_DeatilBar;