import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
}
