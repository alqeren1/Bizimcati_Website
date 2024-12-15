import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaRegPlayCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const GalleryPage = () => {
  const [generalMedia, setGeneralMedia] = useState([]);
  const [weddingMedia, setWeddingMedia] = useState([]);
  const [animalsMedia, setAnimalsMedia] = useState([]);
  const [companyEventsMedia, setCompanyEventsMedia] = useState([]);
  const [yemekMedia, setYemekMedia] = useState([]);
  const [restaurantMedia, setRestaurantMedia] = useState([]);
  const [hotelMedia, setHotelMedia] = useState([]);
  const [gardenRestaurantMedia, setGardenRestaurantMedia] = useState([]);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState("general");
  const [mediaType, setMediaType] = useState("all");
  const { t } = useTranslation();
  const location = useLocation();

  const loadMedia = (mediaGlob, thumbnailsGlob) => {
    const media = Object.entries(mediaGlob).map(([path], idx) => ({
      src: path.replace(/^\/public/, ""),
      alt: `Media ${idx + 1}`,
      type: /\.(mp4|webm|ogg)$/i.test(path) ? "video" : "image",
      thumbnail: undefined,
    }));

    const thumbnails = Object.entries(thumbnailsGlob).map(([path]) => ({
      src: path.replace(/^\/public/, ""),
    }));

    return media.map((item) => {
      const matchingThumbnail = thumbnails.find((thumb) =>
        thumb.src.includes(item.src.split("/").pop().split(".")[0])
      );
      return {
        ...item,
        thumbnail: matchingThumbnail ? matchingThumbnail.src : undefined,
      };
    });
  };

  useEffect(() => {
    const generalGlob = import.meta.glob(
      "/public/general/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const generalThumbnailsGlob = import.meta.glob(
      "/public/general/thumbnails/*.{jpg,jpeg,png}"
    );
    const weddingGlob = import.meta.glob(
      "/public/weddingimg/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const weddingThumbnailsGlob = import.meta.glob(
      "/public/weddingimg/thumbnails/*.{jpg,jpeg,png}"
    );
    const animalsGlob = import.meta.glob(
      "/public/animals/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const animalsThumbnailsGlob = import.meta.glob(
      "/public/animals/thumbnails/*.{jpg,jpeg,png}"
    );
    const companyEventsGlob = import.meta.glob(
      "/public/companyEvent/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const companyEventsThumbnailsGlob = import.meta.glob(
      "/public/companyEvent/thumbnails/*.{jpg,jpeg,png}"
    );
    const yemekGlob = import.meta.glob(
      "/public/yemek/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const yemekThumbnailsGlob = import.meta.glob(
      "/public/yemek/thumbnails/*.{jpg,jpeg,png}"
    );
    const restaurantGlob = import.meta.glob(
      "/public/restaurant/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const restaurantThumbnailsGlob = import.meta.glob(
      "/public/restaurant/thumbnails/*.{jpg,jpeg,png}"
    );
    const hotelGlob = import.meta.glob(
      "/public/hotel/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const hotelThumbnailsGlob = import.meta.glob(
      "/public/hotel/thumbnails/*.{jpg,jpeg,png}"
    );
    const gardenRestaurantGlob = import.meta.glob(
      "/public/gardenRestaurant/*.{JPG,MP4,jpg,jpeg,png,mp4,webm,ogg}"
    );
    const gardenRestaurantThumbnailsGlob = import.meta.glob(
      "/public/gardenRestaurant/thumbnails/*.{jpg,jpeg,png}"
    );

    setGeneralMedia(loadMedia(generalGlob, generalThumbnailsGlob));
    setWeddingMedia(loadMedia(weddingGlob, weddingThumbnailsGlob));
    setAnimalsMedia(loadMedia(animalsGlob, animalsThumbnailsGlob));
    setCompanyEventsMedia(
      loadMedia(companyEventsGlob, companyEventsThumbnailsGlob)
    );
    setYemekMedia(loadMedia(yemekGlob, yemekThumbnailsGlob));
    setRestaurantMedia(loadMedia(restaurantGlob, restaurantThumbnailsGlob));
    setHotelMedia(loadMedia(hotelGlob, hotelThumbnailsGlob));
    setGardenRestaurantMedia(
      loadMedia(gardenRestaurantGlob, gardenRestaurantThumbnailsGlob)
    );
  }, []);

  useEffect(() => {
    const validTabs = [
      "general",
      "restaurant",
      "gardenRestaurant",
      "yemek",
      "animals",
      "wedding",
      "hotel",
      "companyEvents",
    ];

    const params = new URLSearchParams(location.search);
    const tab = params.get("tab") || location.state?.tab;

    if (tab && validTabs.includes(tab)) {
      setCurrentTab(tab === "hotel" ? "hotel" : tab); // Redirect "hotel" to "restaurant"
    } else {
      setCurrentTab("general"); // Default tab if invalid or no tab is provided
    }
  }, [location.search, location.state]);

  const getCurrentTabMedia = () => {
    let media = [];
    switch (currentTab) {
      case "general":
        media = generalMedia;
        break;
      case "restaurant":
        media = restaurantMedia;
        break;
      case "gardenRestaurant":
        media = gardenRestaurantMedia;
        break;
      case "yemek":
        media = yemekMedia;
        break;
      case "animals":
        media = animalsMedia;
        break;
      case "wedding":
        media = weddingMedia;
        break;
      case "hotel":
        media = hotelMedia;
        break;
      case "companyEvents":
        media = companyEventsMedia;
        break;
      default:
        media = generalMedia;
    }
  
    // Check if videos exist in the entire media list (persistent across filters)
    const hasVideos = media.some((m) => m.type === "video");
  
    // Filter media based on the selected mediaType
    if (mediaType === "images") {
      media = media.filter((m) => m.type === "image");
    } else if (mediaType === "videos") {
      media = media.filter((m) => m.type === "video");
    }
  
    return { media, hasVideos };
  };
  
  

  const openLightbox = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
    document.querySelectorAll("video").forEach((video) => video.pause());
  };

  useEffect(() => {
    if (!open) return;
    const videos = document.querySelectorAll(".lightbox-video");
    videos.forEach((video, idx) => {
      if (idx !== index) video.pause();
    });
  }, [index, open]);

  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <section className="bg-white py-16 h-full">
          <div className="container mt-10 mx-auto px-4 h-full">
            {/* Tab Headers */}
            <div className="flex overflow-x-auto space-x-6 mb-2 border-b pb-2">
  {[
    { id: "general", label: t("gallery.header") },
    { id: "restaurant", label: t("gallery.header5") },
    { id: "gardenRestaurant", label: t("gallery.header7") },
    { id: "yemek", label: t("gallery.header4") },
    { id: "animals", label: t("gallery.header2") },
    { id: "wedding", label: t("wedding_section.header") },
    { id: "hotel", label: t("gallery.header6") },
    { id: "companyEvents", label: t("gallery.header3") },
  ].map((tab) => (
    <button
      key={tab.id}
      className={`px-6 py-2 text-lg text-left font-bold ${
        currentTab === tab.id
          ? "border-b-4 border-blue-500 text-blue-500"
          : "text-gray-600 hover:text-blue-500"
      }`}
      onClick={() => {
        setCurrentTab(tab.id);
        setMediaType("all"); // Reset mediaType to "all" on tab change
      }}
    >
      {tab.label}
    </button>
  ))}
</div>


           {/* Media Type Filter */}
           {getCurrentTabMedia().hasVideos && (
  <div className="flex text-md justify-center space-x-2 xs:space-x-6 mb-2">
    {[
      { id: "all", label: t("gallery.all") },
      { id: "images", label: t("gallery.images") },
      { id: "videos", label: t("gallery.videos") },
    ].map((filter) => (
      <button
        key={filter.id}
        className={`px-4 py-2 rounded-lg ${
          mediaType === filter.id
            ? "text-blue-500 hover:bg-gray-100"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => setMediaType(filter.id)}
      >
        {filter.label}
      </button>
    ))}
  </div>
)}


{/* Tab Content */}
<div
  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${
    getCurrentTabMedia().hasVideos ? "mt-2" : "mt-4"
  }`}
>
  {getCurrentTabMedia().media.length > 0 ? (
    getCurrentTabMedia().media.map((media, idx) => (
      <div
        key={media.src}
        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={() => openLightbox(idx)}
      >
        {media.type === "image" ? (
          <img
            src={media.thumbnail || media.src}
            alt={media.alt}
            loading="lazy"
            className="w-full h-64 object-cover"
          />
        ) : (
          <>
            <video
              src={media.src}
              className="w-full h-64 object-cover"
              muted
              playsInline
              poster={media.thumbnail || "/path/to/your/poster.jpg"}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaRegPlayCircle className="text-white w-12 h-12 bg-black bg-opacity-50 rounded-full" />
            </div>
          </>
        )}
      </div>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-600">
      {t("gallery.no_media_available")}
    </p>
  )}
</div>

          </div>
        </section>
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          index={index}
          close={closeLightbox}
          slides={getCurrentTabMedia().media.map((media) => ({
            src: media.src,
            type: media.type,
            content:
              media.type === "video" ? (
                <video
                  src={media.src}
                  controls
                  className="max-w-full max-h-full rounded-lg lightbox-video"
                />
              ) : (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="max-w-full max-h-full rounded-lg"
                />
              ),
          }))}
          render={{
            slide: ({ slide }) => slide.content,
          }}
          onBackdropClick={closeLightbox}
          styles={{
            container: {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
          className="custom-lightbox"
        />
      )}
      <Footer />
    </div>
  );
};

export default GalleryPage;
