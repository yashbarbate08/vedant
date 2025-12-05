import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import about from "../assets/products/hair-serum.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // hero reveal
      gsap.from(heroRef.current.querySelectorAll(".hero-item"), {
        y: 30,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      // values cards pop
      gsap.from(valuesRef.current.querySelectorAll(".value-card"), {
        scale: 0.96,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        },
      });

      // story left-right reveal
      gsap.from(storyRef.current.querySelectorAll(".story-col"), {
        x: (i) => (i % 2 === 0 ? -50 : 50),
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section
          ref={heroRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
        >
          <div className="hero-item">
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800 leading-tight">
              About Natural Industries
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">
              We craft eco-friendly cleaning solutions that make homes sparkle
              while protecting people and planet. Our flagship product, Pure
              Earth Floor Cleaner, combines plant-based ingredients with high
              performance — designed for modern households and conscious
              businesses.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-emerald-700 text-white px-5 py-2 rounded-lg shadow hover:bg-emerald-600"
              >
                Contact Sales
              </a>
              <a
                href="#values"
                className="inline-flex items-center gap-2 border border-emerald-200 px-4 py-2 rounded-lg text-emerald-700"
              >
                Our Values
              </a>
            </div>
          </div>

          <div className="hero-item relative">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src={about}
                alt="product"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 shadow-sm flex items-start gap-3">
                <div className="text-2xl">🌿</div>
                <div>
                  <div className="text-xs text-neutral-500">Formula</div>
                  <div className="font-medium text-emerald-800">
                    Plant-based
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-sm flex items-start gap-3">
                <div className="text-2xl">✨</div>
                <div>
                  <div className="text-xs text-neutral-500">Benefit</div>
                  <div className="font-medium text-emerald-800">
                    Non-toxic shine
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="values" ref={valuesRef} className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Our Values
          </h2>
          <p className="text-sm text-neutral-600 mb-6">
            Sustaining tomorrow — we believe in transparency, responsibility,
            and quality. Here are the pillars that guide us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="value-card bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-3xl">🌱</div>
              <h3 className="mt-3 font-semibold text-emerald-800">
                Sustainability
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Sourcing plant-based ingredients and minimizing plastic wherever
                possible.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-3xl">🔬</div>
              <h3 className="mt-3 font-semibold text-emerald-800">
                Safety First
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Non-toxic formulations tested for households and commercial use.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-3xl">🤝</div>
              <h3 className="mt-3 font-semibold text-emerald-800">Community</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Fair trade relationships with growers and support for local
                initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section
          ref={storyRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          <div className="story-col bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-emerald-800">
              Our Story
            </h3>
            <p className="mt-3 text-neutral-600">
              Founded by a small team of chemists and growers, Natural
              Industries started with a simple idea: cleaning shouldn't hurt the
              planet. Over the years we refined formulas, partnered with local
              farmers, and built a brand trusted by families and businesses.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>• Ethically sourced ingredients</li>
              <li>• Small-batch testing and quality control</li>
              <li>• Rapid customer support and transparent labeling</li>
            </ul>
          </div>

          <div className="story-col bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-emerald-800">Impact</h3>
            <p className="mt-3 text-neutral-600">
              We measure success not only by sales but by environmental impact.
              Our latest initiatives include reduced packaging, a refill
              program, and community clean-up events.
            </p>

            <div className="mt-4">
              <div className="text-sm text-neutral-600">
                Current initiatives
              </div>
              <div className="mt-2 grid grid-cols-1 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-700 rounded-full" />
                  <div className="text-sm">
                    Refill stations in select partner stores
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-700 rounded-full" />
                  <div className="text-sm">Plastic reduction roadmap</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-700 rounded-full" />
                  <div className="text-sm">Community education workshops</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">
                Want to partner with us?
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Distributors, retailers and CSR partners — we would love to hear
                from you.
              </p>
            </div>

            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-emerald-700 px-5 py-2 rounded-lg shadow"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default About;
