import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const CorporateMeetingPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 flex text-justify justify-center">
        <div className="w-full md:w-[800px] px-8 md:px-0">
          {/* Content Section */}
          <div className="mt-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {t("corporate_meeting_section.header.0")}
            </h2>
            <h2 className="text-xl font-bold text-gray-800 mb-2 mt-12">
              {t("corporate_meeting_section.header.1")}
            </h2>
            <div className="text-lg text-gray-700 mb-6">
              <p className="mb-4">
                {t("corporate_meeting_section.intro_paragraphs.0")}
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative md:h-auto">
            <img
              src="/companyEvent/mercedes.png"
              alt="Doğum Günü Partisi"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <a
              href="/galeri?tab=companyEvents"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-gray-700 bg-opacity-50 text-white py-2 backdrop-blur-lg px-4 rounded-lg text-md font-semibold hover:bg-opacity-70 transition duration-300"
            >
              {t("wedding_section.seeMore")}
            </a>
          </div>
          <div className="mt-8">
            <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
              {t("corporate_meeting_section.header.2")}
            </h2>
            <div className="text-lg text-gray-700 mb-6">
              <p className="mb-4">
                {t("corporate_meeting_section.intro_paragraphs.1")}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
              {t("corporate_meeting_section.header.3")}
            </h2>
            <div className="text-lg text-gray-700 mb-6">
              <p className="mb-4">
                {t("corporate_meeting_section.intro_paragraphs.2")}
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                {t("corporate_meeting_section.header.4")}
              </h2>
              <div className="text-lg text-gray-700 mb-6">
                <p className="mb-4">
                  {t("corporate_meeting_section.intro_paragraphs.3")}
                </p>
              </div>
              <div className="mt-8">
                <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                  {t("corporate_meeting_section.header.5")}
                </h2>
                <div className="text-lg text-gray-700 mb-12">
                  <p className="mb-4">
                    {t("corporate_meeting_section.intro_paragraphs.4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="/iletisim"
            className="inline-block mt-4 w-full flex justify-center py-3 hover:bg-[#0a72bf] bg-[#0D92F4] text-white font-semibold rounded-md transition duration-300"
          >
            {t("corporate_meeting_section.contact_button")}
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CorporateMeetingPage;
