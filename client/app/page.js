"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./globals.css";
import dynamic from "next/dynamic";
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
import Script from "next/script";
import { toast } from "react-toastify";
import axios from "axios";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");

  // handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", { Name, Email, Msg });

    try {
      if (!Name || !Email || !Msg) {
        toast.error("All fields are required");
        return;
      }
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/portfolio/sendEmail`,
        { Name, Email, Msg }
      );
      console.log("Response from server:", res.data);
      if (res.data.success) {
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      if (error.response) {
        console.error("Backend response:", error.response.data);
      }
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <main className="flex flex-col ">
      {/* Home page design */}
<section
  id="home"
  className="flex flex-col md:flex-row items-center h-auto min-h-screen w-full background-first py-16 md:py-24 px-4 md:px-40"
>
  {/* Left side */}
  <div className="flex flex-col justify-center w-full md:w-[65%] px-2 md:px-8 mb-10 md:mb-0">
    <h3 className="text-3xl md:text-5xl font-bold mb-3">
      Hello, It&apos;s Me
    </h3>
    <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
      Abhishek Agnihotri
    </h1>
    <div className="text-2xl md:text-4xl flex font-bold mb-6">
      And I am a{" "}
      <span className="green px-2">
        <Typewriter
          onInit={(typewriter) => {
            const loopTitles = () => {
              typewriter
                .typeString(" Full Stack Developer!")
                .pauseFor(2000)
                .deleteAll()
                .typeString(" MERN Stack Developer!")
                .pauseFor(2000)
                .deleteAll()
                .typeString(" Web Developer!")
                .pauseFor(2000)
                .deleteAll()
                .callFunction(loopTitles);
            };
            loopTitles();
            typewriter.start();
          }}
          options={{
            loop: true,
            delay: 300,
            deleteSpeed: 400,
          }}
        />
      </span>
    </div>
    <p className="text-lg md:text-2xl mb-6">
      I&apos;m a web developer specializing in building responsive,
      user-friendly websites and web applications. Explore my work and
      let’s connect.
    </p>
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Social Icons */}
      <a href="https://github.com/Abhi21-7" aria-label="GitHub">
        <lord-icon
          className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
          src="https://cdn.lordicon.com/jjxzcivr.json"
          trigger="hover"
          colors="primary:#08a88a,secondary:#08a88a"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </a>
      <a href="https://www.linkedin.com/in/abhishek-agnihotri-b5a9492b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">
        <lord-icon
          className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
          src="https://cdn.lordicon.com/euybrknk.json"
          trigger="hover"
          colors="primary:#08a88a,secondary:#08a88a"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </a>
      <a href="https://x.com/Abhi21_7?t=EkITWKEtgTztgxqR1dBAqQ&s=09" aria-label="Twitter">
        <lord-icon
          className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
          src="https://cdn.lordicon.com/phdtlffx.json"
          trigger="hover"
          colors="primary:#08a88a,secondary:#08a88a"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </a>
      <a href="https://www.instagram.com/abhi21.7?utm_source=qr&igsh=ODdwN2djbXllODQ2" aria-label="Instagram">
        <lord-icon
          className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
          src="https://cdn.lordicon.com/cuwcpyqc.json"
          trigger="hover"
          colors="primary:#08a88a,secondary:#08a88a"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </a>
    </div>
    <a href="/Resume.pdf" download>
      <button type="download" onClick={() => toast.success("CV Downloaded Successfully!")} className="text-white bg-gradient-to-br mt-7 font-bold text-2xl h-15 w-[227px] from-green-400 to-blue-400 hover:bg-gradient-to-bl rounded-full px-5 py-2.5 text-center me-2 mb-2 transition-shadow duration-100 hover:shadow-lg glow-hover" > Download CV </button>

    </a>
  </div>

  {/* Right side */}
  <div className="flex justify-center w-full md:w-[35%]">
    <Image
      src="/home.png"
      alt="Profile Picture"
      width={350}
      height={350}
      className="object-contain max-w-full h-auto"
      priority
    />
  </div>
</section>

      {/* About page Design */}
<section
  id="about"
  className="flex flex-col md:flex-row items-center min-h-screen w-full py-7 md:py-24 px-4 md:px-30 "
>
  {/* Left side */}
  <div className="flex justify-center items-center w-full md:w-[40%] mb-8 md:mb-0">
    <Image
      src="/about.png"
      alt="Profile Picture"
      width={350}
      height={350}
      className="object-contain rounded-xl "
      priority
    />
  </div>

  {/* Right side */}
  <div className="flex flex-col w-full md:w-[55%]">
    <div
      className="overflow-y-auto scrollable-content transition-all duration-300 rounded-lg p-4 md:p-8"
      style={{
        maxHeight: "480px",
        minHeight: "250px",
        scrollbarWidth: "thin",
        scrollbarColor: "rgb(0, 255, 200) transparent",
      }}
    >
      <h1 className="text-3xl md:text-6xl font-extrabold mb-4">
        About <span className="green">Me</span>
      </h1>
      <h4 className="text-2xl md:text-4xl font-bold mb-4">Full Stack Developer!</h4>
      <p className="text-xl md:text-2xl mb-6">
        I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, allowing me to build complete solutions from concept to deployment.
      </p>
      <p className="text-xl md:text-2xl mb-2">💻 What I Do</p>
      <p className="text-xl md:text-2xl mb-2">
        I work across the full stack, with strong command of:
      </p>
      <div className="text-xl md:text-2xl mb-2">
        <span className="font-bold mr-2">● Frontend:</span> HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS
      </div>
      <div className="text-xl md:text-2xl mb-2">
        <span className="font-bold mr-2">● Backend:</span> Node.js, Express.js
      </div>
      <div className="text-xl md:text-2xl mb-6">
        <span className="font-bold mr-2">● Database:</span> MongoDB
      </div>

      {showMore && (
        <>
          <p className="text-base md:text-xl mb-6">
            I enjoy crafting clean, functional code and turning ideas into interactive, real-world web applications. From designing sleek user interfaces to developing robust backend systems, I aim to build seamless digital experiences.
          </p>
          <div className="mb-6">
            <p className="text-base md:text-xl mb-2 font-bold">🚀 My Mission</p>
            <p className="text-base md:text-xl">
              To continuously learn, grow, and contribute to impactful projects while staying up to date with the latest technologies and trends in web development. I believe in writing clean, maintainable code and creating websites that are not only visually appealing but also optimized for performance and accessibility.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-base md:text-xl mb-2 font-bold">🎯 Goals</p>
            <p className="text-base md:text-xl">
              I’m always looking for opportunities where I can contribute to a dynamic development team, work on real-world projects, and grow under the mentorship of experienced developers.
            </p>
          </div>
        </>
      )}
      <button
        type="button"
        onClick={() => setShowMore(!showMore)}
        className="block text-white bg-gradient-to-br font-bold text-lg md:text-xl h-12 mx-auto w-[70%] md:w-[40%] from-green-400 to-blue-400 hover:bg-gradient-to-bl rounded-full px-5 py-2.5 text-center mb-2 mt-4 transition-shadow duration-100 hover:shadow-lg glow-hover"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  </div>

  <style jsx>{`
    .scrollable-content::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }
    .scrollable-content::-webkit-scrollbar-thumb {
      background: rgb(0, 255, 200);
      border-radius: 4px;
    }
  `}</style>
</section>

      {/* Portfolio page Design */}
      <section
        id="portfolio"
        className="flex background-first h-[100vh] md:px-40 py-24 px-5"
      >
        <div className="flex flex-col mx-auto  mt-10 md:mt-15 w-full">
          <h1 className="text-6xl text-center font-extrabold mb-15">
            Latest <span className="green">Projects</span>
          </h1>
          <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-8 overflow-y-auto md:overflow-x-auto scrollable-content transition-all duration-300 bg-opacity-80 rounded-lg p-2">
            {/* Project 1 */}
            <div className="group relative rounded-xl p-8 shadow-lg flex flex-col items-center justify-center transition-all duration-300 bg-gradient-to-br md:hover:bg-gradient-to-br from-green-400 to-blue-400 md:hover:from-green-400 hover:to-blue-400 cursor-pointer h-80 w-full overflow-hidden">
              <Image
                src="/cherify.png"
                width={370}
                height={200}
                alt="Cherify - Crowdfunding Website"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-50 transition-opacity duration-300 z-0"
              />
              <div className="absolute inset-0 md:opacity-50 md:group-hover:opacity-20 md:transition-opacity md:duration-300 z-10"></div>
              <div className="relative z-20 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
                  Cherify
                </h2>
                <p className="text-lg text-center mb-2 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
                  Cherify is a crowdfunding website that allows users to create
                  and support projects. It features user authentication, project
                  management, and payment integration.
                </p>
                <a href="https://cherify-a-crowdfunding-website.vercel.app/">
                  <button className="mt-6 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 bg-white text-green-600 font-bold px-6 py-2 rounded-full shadow hover:bg-green-500 hover:text-white">
                    Visit
                  </button>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative rounded-xl p-8 shadow-lg flex flex-col items-center justify-center transition-all duration-300 bg-gradient-to-br md:hover:bg-gradient-to-br from-green-400 to-blue-400 md:hover:from-green-400 hover:to-blue-400 cursor-pointer h-80 w-full overflow-hidden">
              <Image
                src="/weather.png"
                alt="Weather App"
                width={370}
                height={200}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-50 transition-opacity duration-300 z-0"
              />
              <div className="absolute inset-0 md:opacity-50 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
              <div className="relative z-20 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
                  Weather App
                </h2>
                <p className="text-lg text-center mb-2 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
                  A simple weather application that provides real-time weather
                  updates. It features location-based weather data, a clean
                  interface, and responsive design.
                </p>
                <a href="https://weather-app-sigma-drab-73.vercel.app/">
                  <button className="mt-6 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 bg-white text-green-600 font-bold px-6 py-2 rounded-full shadow hover:bg-green-500 hover:text-white">
                    Visit
                  </button>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative rounded-xl p-8 shadow-lg flex flex-col items-center justify-center transition-all duration-300 bg-gradient-to-br md:hover:bg-gradient-to-br from-green-400 to-blue-400 md:hover:from-green-400 hover:to-blue-400 cursor-pointer h-80 w-full overflow-hidden">
              <Image
                src="/Passop.png"
                alt="Passop - Password Manager"
                width={370}
                height={200}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-50 transition-opacity duration-300 z-0"
              />
              <div className="absolute inset-0 opacity-50 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
              <div className="relative z-20 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
                  Passop
                </h2>
                <p className="text-lg text-center mb-2 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
                  Passop is a password manager that helps users securely store
                  and manage their passwords. It features encryption, user
                  authentication, and a user-friendly interface.
                </p>
                <a href="https://passop-cwa.netlify.app">
                  <button className="mt-6 md:opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 bg-white text-green-600 font-bold px-6 py-2 rounded-full shadow hover:bg-green-500 hover:text-white">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact page Design */}
     <section
  id="contact"
  className="flex flex-col md:flex-row items-center min-h-screen w-full py-12 md:py-24 px-4 md:px-40 background-second"
>
  {/* Left side */}
  <div className="flex flex-col justify-center w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
      Get in <span className="green">Touch</span>
    </h1>
    <h4 className="text-2xl md:text-4xl font-bold mb-4">Let&apos;s Connect!</h4>
    <p className="text-lg md:text-2xl mb-8">
      I would love to hear from you! Whether you have a question, want to
      collaborate, or just want to say hi, feel free to reach out.
    </p>
    <p className="text-lg md:text-2xl mb-2">
      You can contact me via email or connect with me on social media.
    </p>
  </div>

  {/* Right side (Form) */}
  <form
    onSubmit={handleSubmit}
    className="flex flex-col items-center justify-center w-full md:w-1/2 md:mt-30  p-6 md:p-10"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
      <input
        type="text"
        placeholder="Name"
        className="background-first w-full h-18 px-5 text-lg border-2 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="background-first w-full h-18 px-5 text-lg border-2 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter Message"
        className="background-first col-span-1 md:col-span-2 w-full h-62 px-5 py-3 text-lg border-2 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        value={Msg}
        onChange={(e) => setMsg(e.target.value)}
        required
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full md:w-1/2 text-white bg-gradient-to-br from-green-400 to-blue-400 hover:bg-gradient-to-bl font-bold text-xl h-14 rounded-full px-5 py-3 transition-shadow duration-100 hover:shadow-lg glow-hover"
    >
      Send Message
    </button>
  </form>
</section>

      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
