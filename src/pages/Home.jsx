import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// hero images (update filenames if yours differ)
import img1 from "../assets/Images/1.png";
import img2 from "../assets/Images/2.png";
import img3 from "../assets/Images/3.png";

// product images (make sure these files exist in src/assets/products/)
import aataImg from "../assets/products/aata-noodles.jpg";
import floorCleanerImg from "../assets/products/floor-cleaner.jpg";
import hairSerumImg from "../assets/products/hair-serum.jpg";
import detergentImg from "../assets/products/detergent.jpg";
import roomFreshenerImg from "../assets/products/room-freshener.jpg";
import talcImg from "../assets/products/talc.jpg";
import soapImg from "../assets/products/soap.jpg";
import oatsImg from "../assets/products/oats.jpg";
import sunscreenImg from "../assets/products/sunscreen.jpg";
import shampooImg from "../assets/products/shampoo.jpg";
import soyaImg from "../assets/products/soya-chunks.jpg";
import facewashImg from "../assets/products/face-wash.jpg";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // HERO IMAGES — use plain imports (strings) so <img src={...} /> works
  const images = [img1, img2, img3];

  // PRODUCT LIST (using imported images)
  const products = [
    {
      title: "Aata Noodles",
      price: "₹45",
      img: aataImg,
      description:
        "Healthy whole wheat noodles made with natural ingredients. High fiber & guilt-free.",
      features: ["High Fiber", "Natural Ingredients"],
    },
    {
      title: "Pure Earth Floor Cleaner",
      price: "₹149",
      img: floorCleanerImg,
      description:
        "A safe, plant-based cleaner that eliminates germs and leaves floors spotless.",
      features: ["Non-toxic", "Deep Cleaning"],
    },
    {
      title: "Hair Serum",
      price: "₹120",
      img: hairSerumImg,
      description:
        "A nourishing serum crafted with natural oils to make your hair shine.",
      features: ["Shiny Hair", "Natural Oils"],
    },
    {
      title: "Laundry Detergent",
      price: "₹199",
      img: detergentImg,
      description:
        "Gentle on fabrics but strong on stains. Natural freshness included.",
      features: ["Fabric Safe", "Stain Removal"],
    },
    {
      title: "Room Freshener",
      price: "₹99",
      img: roomFreshenerImg,
      description:
        "A botanical room freshener that eliminates odors and lasts long.",
      features: ["Long Lasting", "Natural Aroma"],
    },
    {
      title: "Talc Powder",
      price: "₹55",
      img: talcImg,
      description:
        "Smooth and refreshing talc that keeps your skin cool and fragrant.",
      features: ["Soft Skin", "Fresh Feel"],
    },
    {
      title: "Bathing Soap",
      price: "₹35",
      img: soapImg,
      description:
        "Natural bathing soap made with oils and extracts for soft, glowing skin.",
      features: ["Moisturizing", "Soft Lather"],
    },
    {
      title: "Oats",
      price: "₹79",
      img: oatsImg,
      description:
        "Rich in fiber and perfect for a healthy breakfast. Clean & natural grains.",
      features: ["High Fiber", "Healthy Breakfast"],
    },
    {
      title: "Sunscreen",
      price: "₹249",
      img: sunscreenImg,
      description:
        "SPF 50+ sunscreen that protects your skin naturally without irritation.",
      features: ["SPF 50+", "Non-greasy"],
    },
    {
      title: "Shampoo",
      price: "₹110",
      img: shampooImg,
      description:
        "A natural formula shampoo for smooth, strong, and healthy hair.",
      features: ["Anti-Hairfall", "Natural Formula"],
    },
    {
      title: "Soya Chunks",
      price: "₹99",
      img: soyaImg,
      description:
        "High-protein soya chunks that are healthier and tastier for every meal.",
      features: ["High Protein", "Energy Boost"],
    },
    {
      title: "Face Wash",
      price: "₹89",
      img: facewashImg,
      description:
        "Purifying face wash crafted with natural ingredients for clear, glowing skin.",
      features: ["Oil Control", "Unclogs Pores"],
    },
  ];

  const gridRef = useRef(null);
  const [modalData, setModalData] = useState(null);

  // GSAP animation — use opacity (not autoAlpha) + once:true so cards don't appear faded
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".prod-card");

    gsap.from(cards, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 90%",
        once: true,
      },
    });

    // cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-neutral-50">
      <Navbar />

      {/* HERO SLIDER */}
      <div className="carousel-container -mt-5 h-200">
        <div className="carousel-track h-200">
          {images.map((src, i) => (
            <div key={i} className="slide " aria-hidden={i !== 0}>
              <img
                src={src}
                alt={`hero-${i}`}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6">
          Our Products
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {products.map((p, i) => (
            <article
              key={p.title + i}
              className="prod-card bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 md:h-72 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />

                <button
                  onClick={() => setModalData(p)}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow text-sm font-medium hover:bg-white"
                  aria-label={`More info about ${p.title}`}
                >
                  More Info
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-emerald-700">
                  {p.title}
                </h3>

                <p className="text-neutral-800 font-bold mt-1">{p.price}</p>

                <ul className="mt-3 text-sm text-neutral-600 space-y-1">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-600 text-lg">•</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="mt-4 w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-600 transition">
                  Buy Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {modalData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-3 right-4 text-xl font-bold text-neutral-600"
              aria-label="Close product modal"
            >
              ×
            </button>

            <img
              src={modalData.img}
              alt={modalData.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="text-2xl font-semibold text-emerald-700 mt-4">
              {modalData.title}
            </h3>

            <p className="text-neutral-600 mt-2">{modalData.description}</p>

            <button
              className="mt-5 w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
              onClick={() => alert("Buy Now clicked! (demo)")}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}

      {/* INLINE CSS */}
      <style>{`
        .prod-card { opacity: 1 !important; } /* prevent faded look */

        .carousel-container {
          width: 100%;
          height: 50vh;
          overflow: hidden;
          position: relative;
        }

        .carousel-track {
          display: flex;
          height: 100%;
          animation: slideLoop 12s infinite ease-in-out;
        }

        .slide {
          width: 100%;
          flex-shrink: 0;
        }

        @keyframes slideLoop {
          0% { transform: translateX(0); }
          30% { transform: translateX(0); }
          33% { transform: translateX(-100%); }
          63% { transform: translateX(-100%); }
          66% { transform: translateX(-200%); }
          96% { transform: translateX(-200%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Home;
