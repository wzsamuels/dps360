
import ContactForm from "@/components/ContactForm"
import { useForm, SubmitHandler } from "react-hook-form"

const ContactPage = () => {

  return (
    <div className="w-full flex justify-center">
      <div className="p-4 max-w-lg w-full">
        <ContactForm/>
      </div>
    </div>
  )
}

export default ContactPage