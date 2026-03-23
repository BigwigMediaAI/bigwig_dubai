import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import Industries from "./components/Industries";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <Services />
      <WhyChooseUs />

      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
}
