'use client'

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Button from "./Button"

type Inputs = {
  name: string
  phone: string
  email: string
  message: string
}

const ContactForm = () => {
  const {register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setMessage("Submitting your feedback...")
    console.log(data);

    try {
      let body = JSON.stringify(data)
      const requestOptions = {
        method: "POST",
        body
      };

      const response = await fetch('/email', requestOptions)
      const responseData = await response.json();
      console.log(responseData.$metadata);

      if(responseData.$metadata.httpStatusCode === 200) {
        setMessage("Your message has been successfully sent! We'll respond shortly to any questions or concerns.");
      } else {
        setMessage("There was a server error sending your message. Please call us at the number above.");
      }
    } catch(error: any) {
      setMessage(`There was a server error sending your message: ${error?.message ? error.message as string : "unknown error."}. Please call us at 336-417-7759`)
    }
  }

  if(message) {
    return <div className="text-center text-2xl my-4">{message}</div>
  }

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mt-4 mb-2 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Name
        </label>
        <input required className="text-black w-full p-2 flex-1 basis-64 bg-gray-200 rounded-md" {...register("name")}/>        
      </div>
      <div className="mt-2 mb-4">
        {errors.name && errors.name.message}
      </div>
      <div className="flex items-center mt-4 mb-2 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Phone
        </label>
        <input required className="text-black w-full p-2 flex-1 basis-64 bg-gray-200 rounded-md" {...register("phone")}/>        
      </div>
      <div className="mt-2 mb-4">
        {errors.phone && errors.phone.message}
      </div>
      <div className="flex items-center mt-4 mb-2 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Email
        </label>
        <input required className="text-black w-full p-2 flex-1 basis-64 bg-gray-200 rounded-md" {...register("email")}/>        
      </div>
      <div className="mt-2 mb-4">
        {errors.email && errors.email.message}
      </div>
      <div className="flex items-center mt-4 mb-2 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Message
        </label>
        <textarea required className="text-black w-full flex-1 basis-64 p-2 bg-gray-200 rounded-md" rows={3} {...register("message")}/>        
      </div>
      <div className="mt-2 mb-4">
        {errors.message && errors.message.message}
      </div>
      <div className="flex justify-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default ContactForm;