
import ContactForm from "@/components/ContactForm"
import { useForm, SubmitHandler } from "react-hook-form"

const ContactPage = () => {

  return (
    <div className="w-full flex justify-center">
      <div className="p-4 max-w-lg w-full">
        <h1 className="text-3xl text-center">Contact Us</h1>
        <p className="text-center">
          We'd love to hear from you!
        </p>
        <p className="text-center">
          Feel free to contact us with any questions or concerns.
        </p>
        <p className="text-center"></p>
        <ContactForm/>
      </div>
    </div>
  )
}

export default ContactPage