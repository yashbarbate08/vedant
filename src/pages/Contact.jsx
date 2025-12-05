import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import contact from "../assets/Images/contact.png";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

// NOTE: Copy the promo image into your project's public folder and
// reference it as: /assets/cleaner.jpg (or adjust the path below).
// The original image used for reference: /mnt/data/WhatsApp Image 2025-12-05 at 12.09.58.jpeg

const Contact = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiry: "General",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power3.out" },
      });

      tl.from(leftRef.current, { x: -40, autoAlpha: 0 })
        .from(
          rightRef.current.querySelectorAll(".field"),
          {
            y: 20,
            autoAlpha: 0,
            stagger: 0.12,
          },
          "-=.4"
        )
        .from(
          rightRef.current.querySelectorAll(".btn"),
          { scale: 0.95, autoAlpha: 0, duration: 0.5 },
          "-=.3"
        );

      // small floating animation for badges on left
      gsap.to(".feature-badge", {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
        stagger: 0.25,
      });

      // subtle parallax on scroll for left image
      gsap.to(leftRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.6,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.name || !form.email) {
      alert("Please add your name and email.");
      return;
    }
    setSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setSubmitting(false);
      alert("Thanks! Your message has been received. We'll contact you soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        inquiry: "General",
      });
    }, 900);
  };

  // Owner details
  const owner = {
    name: "Vedant Barbate",
    phoneDisplay: "+91 99231 21530",
    phoneTel: "+919923121530", // tel/wa format (no spaces)
    email: "vedantbarbate@gmail.com",
    waMessage: "Hello Vedant, I have an inquiry about Pure Earth floor cleaner."
  };

  // create whatsapp link (encode message)
  const waLink = `https://wa.me/${owner.phoneTel}?text=${encodeURIComponent(
    owner.waMessage
  )}`;

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Image + product info (from reference image) */}
          <section
            ref={leftRef}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
            aria-label="promo"
          >
            <div className="w-full h-96 md:h-[520px] relative">
              {/* Background image: put your image at /public/assets/cleaner.jpg */}
              <img
                src="https://images.unsplash.com/photo-1682156930032-f1431a10b89e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pure Earth Floor Cleaner"
                className="w-full h-full object-cover"
              />

              {/* overlay card */}
              <div className="absolute left-6 bottom-6 p-5 bg-white/90 backdrop-blur-md rounded-2xl w-[88%] md:w-[70%]">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-800">
                  Pure Earth
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Floor Cleaner — Spotless floors, naturally
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="feature-badge flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      🌿
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600">
                        Plant-Based
                      </div>
                      <div className="text-sm font-medium text-emerald-800">
                        Eco Formula
                      </div>
                    </div>
                  </div>

                  <div className="feature-badge flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      ✨
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600">Non-Toxic</div>
                      <div className="text-sm font-medium text-emerald-800">
                        Shine
                      </div>
                    </div>
                  </div>

                  <div className="feature-badge col-span-2 flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      🧼
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600">
                        Launch Offer
                      </div>
                      <div className="text-sm font-medium text-amber-800">
                        Buy 1 Get 1 Free
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm">
                  <a
                    href="mailto:naturalindustries@gmail.com"
                    className="text-emerald-700 underline"
                  >
                    naturalindustries@gmail.com
                  </a>
                  <span className="text-neutral-500">•</span>
                  <a
                    href="https://naturalindustries.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-700 underline"
                  >
                    naturalindustries.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT: Contact form */}
          <section
            ref={rightRef}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-emerald-800">
              Contact Us
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Questions about the product, bulk orders, or partnership? Send a
              message — we reply quickly.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 gap-4"
            >
              <div className="field">
                <label className="block text-xs text-neutral-600">
                  Full name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-emerald-300"
                  placeholder="Your name"
                />
              </div>

              <div className="field grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-600">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-emerald-300"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-600">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-emerald-300"
                    placeholder="+91 9XXXXXXXX"
                  />
                </div>
              </div>

              <div className="field">
                <label className="block text-xs text-neutral-600">
                  Inquiry type
                </label>
                <select
                  name="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-emerald-300"
                >
                  <option>General</option>
                  <option>Bulk / Business</option>
                  <option>Retail / Stockist</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="field">
                <label className="block text-xs text-neutral-600">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-emerald-300"
                  placeholder="Tell us how we can help"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="btn inline-flex items-center gap-3 bg-emerald-700 text-white px-5 py-2 rounded-lg shadow hover:bg-emerald-600 disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                <a
                  href="mailto:naturalindustries@gmail.com"
                  className="text-sm text-neutral-600 underline"
                >
                  Or email us directly
                </a>
              </div>

              {/* Owner contact card */}
              {/* <div className="mt-6 p-4 border border-neutral-100 rounded-lg bg-amber-50">
                <h4 className="text-sm font-semibold text-amber-800">Product Owner</h4>
                <div className="mt-2 text-sm text-neutral-700">
                  <div><strong>{owner.name}</strong></div>
                  <div className="mt-1">Phone:{" "}
                    <a href={`tel:${owner.phoneTel}`} className="underline">
                      {owner.phoneDisplay}
                    </a>
                  </div>
                  <div>Email:{" "}
                    <a href={`mailto:${owner.email}`} className="underline">
                      {owner.email}
                    </a>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={`tel:${owner.phoneTel}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-amber-200 text-sm bg-white hover:bg-amber-100"
                      aria-label="Call owner"
                    >
                      📞 Call
                    </a>

                    <a
                      href={`mailto:${owner.email}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-amber-200 text-sm bg-white hover:bg-amber-100"
                      aria-label="Email owner"
                    >
                      ✉️ Email
                    </a>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-emerald-700 text-sm bg-emerald-700 text-white hover:bg-emerald-600"
                      aria-label="Message owner on WhatsApp"
                    >
                      💬 WhatsApp
                    </a>
                  </div>

                  <div className="mt-3 text-xs text-neutral-500">
                    Clicking WhatsApp opens a new tab to message the owner directly.
                  </div>
                </div>
              </div> */}

              <div className="mt-4 text-xs text-neutral-500">
                <strong>Address:</strong> Manufacturing & HQ — Nagpur, India
              </div>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
