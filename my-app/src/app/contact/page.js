import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className=" bg-black text-white max-w-3xl mx-auto pt-20">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
