import Address from "@/components/Address";
import ContactUsForm from "@/components/ContactUsForm";
import ContactUsMap from "@/components/ContactUsMap";
import ContactUsTopPhoto from "@/components/ContactUsTopPhoto";

function ContactUsPage() {
  return (
    <>
      <ContactUsTopPhoto />
      <div className="mt-24 grid gap-8 grid-cols-1 md:grid-cols-2">
        <ContactUsForm />
        <Address />
      </div>
      <ContactUsMap />
    </>
  );
}

export default ContactUsPage;
