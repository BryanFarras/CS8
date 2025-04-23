import React, { useState } from "react";
import NavBar from "./NavBar.jsx";
import listIcon from "./assets/listIcon.png";
import gridIcon from "./assets/gridIcon.webp";
import news from "./news.jsx";
import Iklan from "./iklan.jsx";

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function HomePage() {
  const [isListView, setIsListView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <NavBar />

      <main className="container mx-auto px-4 py-8 pt-20 w-full ">
        <div className="flex flex-wrap justify-center gap-5 w-full">

          <section className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
              <h2 className="text-2xl font-bold">COMING IN HOT - Steve</h2>
              <button
                onClick={() => setIsListView(!isListView)}
                className="bg-color_hover1 text-white px-3 py-2 rounded hover:bg-white transition flex items-center outline-none focus:outline-none"
              >
                <img
                  src={isListView ? gridIcon : listIcon}
                  alt={isListView ? "Grid View" : "List View"}
                  className="w-6 h-6"
                  title={isListView ? "Tampilkan Grid" : "Tampilkan List"}
                />
              </button>
            </div>

            <div
              className={
                isListView
                  ? "space-y-6"
                  : "grid grid-cols-1 md:grid-cols-2 gap-6"
              }
            >
              {news.map((item, index) => (
                <article
                  key={index}
                  className={`bg-white rounded-2xl shadow-md overflow-hidden transition-shadow duration-300 transform ${
                    isListView ? "flex" : ""
                  } ${
                    hoveredIndex === index
                      ? "shadow-xl scale-105 z-10"
                      : "hover:shadow-xl"
                  }`}
                  style={{
                    transitionProperty: "box-shadow, transform",
                    position: hoveredIndex === index ? "relative" : "static",
                  }}
                  onMouseEnter={() => setHoveredIndex(null)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${
                      isListView
                        ? "w-1/3 h-auto object-cover"
                        : "w-full h-48 object-cover"
                    }`}
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold" title={item.title}>
                        {truncateText(item.title, 60)}
                      </h3>
                      <p className="text-sm mt-2 text-gray-600" title={item.summary}>
                        {truncateText(item.summary, 100)}
                      </p>
                    </div>
                    <button
                      className="mt-4 self-start bg-black text-white px-4 py-2 rounded hover:bg-color_hover2 transition"
                      onClick={() => alert(`Baca selengkapnya: ${item.title}`)}
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setHoveredIndex(index);
                      }}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      Baca Selengkapnya
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="w-full lg:w-72">
            <Iklan />
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Berita Lainnya</h2>
          <div className="flex flex-nowrap space-x-4 overflow-x-auto pb-4">
            {news.slice(0, 6).map((item, index) => (
              <article
                key={index}
                className={`min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden transition-shadow duration-300 transform ${
                  isListView ? "flex" : ""
                } ${
                  hoveredIndex === index ? "shadow-xl scale-105 z-10" : "hover:shadow-xl"
                }`}
                style={{
                  transitionProperty: "box-shadow, transform",
                  position: hoveredIndex === index ? "relative" : "static",
                }}
                onMouseEnter={() => setHoveredIndex(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${
                    isListView
                      ? "w-1/3 h-auto object-cover"
                      : "w-full h-32 object-cover"
                  }`}
                />
                <div className="p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold" title={item.title}>
                      {truncateText(item.title, 60)}
                    </h3>
                    <p className="text-xs mt-1 text-gray-600" title={item.summary}>
                      {truncateText(item.summary, 100)}
                    </p>
                  </div>
                  <button
                    className="mt-3 self-start bg-black text-white px-3 py-1.5 rounded hover:bg-color_hover2 transition"
                    onClick={() => alert(`Baca selengkapnya: ${item.title}`)}
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer className="bottom-0 left-0 w-full z-50 bg-color_logo1 text-black py-2 shadow-md text-center font-semibold text-white text-center">
        <p>&copy; 2025 Liputan6 nya Bryan Farras anjoy. All rights reserved.</p>
      </footer>
    </div>
  );
}
