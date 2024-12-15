import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const WeddingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 flex text-justify justify-center">
        <div className="w-full md:w-[800px] px-8 md:px-0">
          <div className="mt-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t("wedding_section.header")}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t("wedding_section.intro_paragraph")}
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full items-center justify-center flex mt-8 mb-16">
            <div className="relative md:h-auto">
              <img
                src="/images/wedding.jpg"
                alt="Wedding"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              {/* See More Button */}
              <a
                href="/galeri?tab=wedding"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-gray-700 bg-opacity-50 text-white py-2 backdrop-blur-lg px-4 rounded-lg text-md font-semibold hover:bg-opacity-70 transition duration-300"
              >
                {t("wedding_section.seeMore")}
              </a>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="w-full">
            <strong className="text-2xl text-gray-800">
              {t("wedding_section.why_choose_us_header")}
            </strong>
            <ul className="list-none text-lg text-gray-700 mt-12 mb-16">
              {t("wedding_section.features", { returnObjects: true }).map(
                (feature, index) => (
                  <li key={index} className="mb-6">
                    <strong>{feature.bold}</strong>: {feature.text}
                  </li>
                )
              )}
            </ul>
            {/* Second Image Section */}
            <div className="relative md:h-auto mb-12">
              <img
                src="/images/wedding2.jpg"
                alt="Wedding 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              {/* See More Button */}
              <a
                href="/galeri?tab=wedding"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-gray-700 bg-opacity-50 text-white py-2 backdrop-blur-lg px-4 rounded-lg text-md font-semibold hover:bg-opacity-70 transition duration-300"
              >
                {t("wedding_section.seeMore")}
              </a>
            </div>
            <strong className="text-2xl text-gray-800">
              {t("wedding_section.header3")}
            </strong>
            <p className="text-lg text-gray-700 mt-8 mb-16">
              {t("wedding_section.additional_paragraphs.0")}
            </p>
            <strong className="text-2xl text-gray-800">
              {t("wedding_section.header4")}
            </strong>
            <p className="text-lg text-gray-700 mt-8">
              {t("wedding_section.additional_paragraphs2.0")}
              <p className="mt-16 font-semibold">
                {t("wedding_section.additional_paragraphs2.1")}
              </p>
            </p>
            <div className="container mx-auto text-left mt-4">
              <a
                href="/iletisim"
                className="inline-block mt-4 w-full flex justify-center py-3 hover:bg-[#0a72bf] bg-[#0D92F4] text-white font-semibold rounded-md transition duration-300"
              >
                {t("wedding_section.contact_button")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WeddingPage;
