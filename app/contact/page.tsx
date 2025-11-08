import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";

export const metadata = {
  title: "Contact Us - AICI Group",
  description:
    "We're here to help. Reach out for any inquiries or to schedule a consultation.",
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-50 ">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage="contact" />
        <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ContactHero />
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
