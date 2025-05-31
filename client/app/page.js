"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./globals.css";
import dynamic from "next/dynamic";
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
import Script from "next/script";
import { toast } from 'react-toastify';
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
    toast.error("An error occurred while submitting the form. Please try again.");
  }
};

  return (
<main className="flex flex-col ">
  {/* Home page design */}
  <section
    id="home"
    className="flex flex-col md:flex-row h-[100vh] w-full background-first py-24 px-5 md:pl-45"
  >
    {/* Left side */}
    <div className="flex flex-col px-5 mt-10 md:mt-51 w-full md:w-1/2">
      <h3 className="text-4xl md:text-5xl font-bold mb-4">Hello, It&apos;s Me</h3>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Abhishek Agnihotri</h1>
      <div className="text-3xl md:text-4xl flex mr-4 font-bold mb-8">
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
                  .callFunction(loopTitles); // Recursively call to loop forever
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
      <p className="text-2xl mb-8">
        I&apos;m a web developer specializing in building responsive,
        user-friendly websites and web applications. Explore my work and
        let’s connect.
      </p>
      <div className="flex mt-2 gap-4">
        {/* Social Icons */}
          <a href="https://github.com/Abhi21-7">
            <lord-icon
              className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
              src={`https://cdn.lordicon.com/jjxzcivr.json`}
              trigger="hover"
              colors="primary:#08a88a,secondary:#08a88a"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </a>
                    <a href="https://www.linkedin.com/in/abhishek-agnihotri-b5a9492b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <lord-icon
              className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
              src={`https://cdn.lordicon.com/euybrknk.json`}
              trigger="hover"
              colors="primary:#08a88a,secondary:#08a88a"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </a>
                    <a href="https://x.com/Abhi21_7?t=EkITWKEtgTztgxqR1dBAqQ&s=09">
            <lord-icon
              className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
              src={`https://cdn.lordicon.com/phdtlffx.json`}
              trigger="hover"
              colors="primary:#08a88a,secondary:#08a88a"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </a>
                    <a href="https://www.instagram.com/abhi21.7?utm_source=qr&igsh=ODdwN2djbXllODQ2">
            <lord-icon
              className="rounded-full transition-shadow duration-100 hover:shadow-lg glow-hover"
              src={`https://cdn.lordicon.com/cuwcpyqc.json`}
              trigger="hover"
              colors="primary:#08a88a,secondary:#08a88a"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </a>
          
      </div>
      <a href="/MyResume.pdf" download>
        <button
          type="download"
          onClick={() => toast.success("CV Downloaded Successfully!")}
          className="text-white bg-gradient-to-br mt-7 font-bold text-2xl h-15 w-[227px] from-green-400 to-blue-400 hover:bg-gradient-to-bl rounded-full px-5 py-2.5 text-center me-2 mb-2 transition-shadow duration-100 hover:shadow-lg glow-hover"
        >
          Download CV
        </button>
      </a>
    </div>

    {/* Right side */}
    <div className="flex flex-col md:pl-40 mt-5 md:mt-22 w-full md:w-1/2">
      <Image
        src="/home.png"
        alt="Profile Picture"
        width={450}
        height={450}
      />
    </div>
  </section>

  {/* About page Design */}
  <section
    id="about"
    className="flex flex-col md:flex-row background-second h-[100vh] py-24 md:px-40 px-5"
  >
    {/* Left side */}
    <div className="flex flex-col mt-2  md:mt-33 w-full md:w-1/2">
      <Image
        src="/about.png"
        alt="Profile Picture"
        width={400}
        height={400}
      />
    </div>

    {/* Right side */}
    <div className="flex flex-col mt-3 md:mt-43 w-full md:w-1/2">
      <div
        className="overflow-y-auto scrollable-content transition-all duration-300 bg-opacity-80 rounded-lg p-2"
        style={{
          maxHeight: "420px",
          minHeight: "250px",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "rgb(0, 255, 200) transparent", // For Firefox
        }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          About <span className="green">Me</span>
        </h1>
        <h4 className="text-4xl font-bold mb-4">Full Stack Developer!</h4>
        <p className="text-2xl mb-8">
          I am a Full Stack Developer with a passion for creating dynamic
          and responsive web applications. I have experience in both
          front-end and back-end development, allowing me to build complete
          solutions from concept to deployment.
        </p>
        <p className="text-2xl mb-2 ">💻 What I Do</p>
        <p className="text-2xl mx-11 mb-2">
          I work across the full stack, with strong command of:
        </p>
        <div className="text-2xl mx-11 mb-2 ">
          <span className="font-bold mr-2">● Frontend:</span> HTML, CSS,
          JavaScript, React.js, Next.js, Tailwind CSS
        </div>
        <div className="text-2xl mx-11 mb-2 flex ">
          <span className="font-bold mr-2">● Backend:</span> Node.js,
          Express.js
        </div>
        <div className="text-2xl mx-11 mb-8 flex">
          <span className="font-bold mr-2">● Database:</span> MongoDB
        </div>

        {showMore && (
          <>
            <p className="text-2xl mb-8">
              I enjoy crafting clean, functional code and turning ideas into
              interactive, real-world web applications. From designing sleek
              user interfaces to developing robust backend systems, I aim to
              build seamless digital experiences.
            </p>
            <div className="mb-8">
              <p className="text-2xl mb-2 font-bold">🚀 My Mission</p>
              <p className="text-2xl">
                To continuously learn, grow, and contribute to impactful
                projects while staying up to date with the latest
                technologies and trends in web development. I believe in
                writing clean, maintainable code and creating websites that
                are not only visually appealing but also optimized for
                performance and accessibility.
              </p>
            </div>
            <div className="mb-8">
              <p className="text-2xl mb-2 font-bold">🎯 Goals</p>
              <p className="text-2xl">
                I’m always looking for opportunities where I can contribute
                to a dynamic development team, work on real-world projects,
                and grow under the mentorship of experienced developers.
              </p>
            </div>
          </>
        )}
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="block text-white bg-gradient-to-br font-bold text-2xl h-15 mx-10 md-mx-0 w-[30%] from-green-400 to-blue-400 hover:bg-gradient-to-bl rounded-full px-5 py-2.5 text-center mb-2 mt-4 transition-shadow duration-100 hover:shadow-lg glow-hover"
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
    <div className="flex flex-col mx-auto mt-10 md:mt-15 w-full">
      <h1 className="text-6xl text-center font-extrabold mb-15">
        Latest <span className="green">Projects</span>
      </h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-8 overflow-y-auto md:overflow-x-auto scrollable-content transition-all duration-300 bg-opacity-80 rounded-lg p-2">
        {/* Project 1 */}
        <div className="group relative rounded-xl p-8 shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-400 cursor-pointer h-80 w-full overflow-hidden">
          <Image
            src="/cherify.png"
            width={370}
            height={200}
            alt="Cherify - Crowdfunding Website"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-50 transition-opacity duration-300 z-0"
          />
          <div className="absolute inset-0 opacity-50 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
          <div className="relative z-20 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
              Cherify
            </h2>
            <p className="text-lg text-center mb-2 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
              Cherify is a crowdfunding website that allows users to create
              and support projects. It features user authentication, project
              management, and payment integration.
            </p>
            <button className="mt-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-green-600 font-bold px-6 py-2 rounded-full shadow hover:bg-green-500 hover:text-white">
              Visit
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group relative rounded-xl p-8 shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-400 cursor-pointer h-80 w-full overflow-hidden">
          <Image
            src="/weather.png"
            alt="Weather App"
            width={370}
            height={200}
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-50 transition-opacity duration-300 z-0"
          />
          <div className="absolute inset-0 opacity-50 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
          <div className="relative z-20 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
              Weather App
            </h2>
            <p className="text-lg text-center mb-2 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
              A simple weather application that provides real-time weather
              updates. It features location-based weather data, a clean
              interface, and responsive design.
            </p>
            <button className="mt-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-green-600 font-bold px-6 py-2 rounded-full shadow hover:bg-green-500 hover:text-white">
              Visit
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group relative rounded-xl p-8 shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-400 cursor-pointer h-80 w-full overflow-hidden">
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
            <p className="text-lg text-center mb-2 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 group-hover:text-white">
              Passop is a password manager that helps users securely store
              and manage their passwords. It features encryption, user
              authentication, and a user-friendly interface.
            </p>
            <button className="mt-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-green-600 font-bold px-6 py-2 rounded-full shadow hover:bg-green-500 hover:text-white">
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Contact page Design */}
  <section
    id="contact"
    className="flex flex-col md:flex-row background-second h-[100vh] md:px-40 py-24 px-5"
  >
    <div className="flex flex-col mt-5 md:mt-60 md:pr-10 p-10 w-full md:w-1/2">
      <h1 className="text-6xl font-extrabold mb-4">
        Get in <span className="green">Touch</span>
      </h1>
      <h4 className="text-4xl font-bold mb-4">Let&apos;s Connect!</h4>
      <p className="text-2xl mb-8">
        I would love to hear from you! Whether you have a question, want to
        collaborate, or just want to say hi, feel free to reach out.
      </p>
      <p className="text-2xl mb-8">
        You can contact me via email or connect with me on social media.
      </p>
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-10 mt-5 md:mt-35 w-full md:w-1/2">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-7 w-full">
        <input
          type="text"
          placeholder="Name"
          className="background-first w-[250px] h-18 px-5 text-xl p-2 border-2 border-gray-600 rounded"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="background-first p-2 w-[250px] h-18 px-5 text-xl border-2 border-gray-600 rounded"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Enter Message"
          className="background-first col-span-2 px-5 py-5 w-full h-70 text-xl row-span-3 p-2 border-2 border-gray-600 rounded"
          value={Msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="block text-white my-10 bg-gradient-to-br font-bold text-2xl h-18 w-full md:w-[40%] from-green-400 to-blue-400 hover:bg-gradient-to-bl rounded-full px-5 py-3.5 text-center mb-2 mt-4 transition-shadow duration-100 hover:shadow-lg glow-hover"
      >
        Send Message
      </button>
    </form>
  </section>

  <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
</main>

  );
}
