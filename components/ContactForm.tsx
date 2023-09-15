'use client'

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  phone: string
  email: string
  message: string
}

const ContactForm = () => {
  const {register, handleSubmit } = useForm<Inputs>();
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setMessage("Submitting your feedback...")
    console.log(data);
    let body = JSON.stringify(data)
    //emailForm("Test Subject", data)
    const requestOptions = {
      method: "POST",
      body
    };

    const response = await fetch('/api/email', requestOptions)
    const responseData = await response.json();
    console.log(responseData.$metadata);

    if(responseData.$metadata.httpStatusCode === 200) {
      setMessage("Your message has been successfully sent! We'll respond shortly to any questions or concerns.");
    } else {
      setMessage("There was a server error sending your message. Please call us at the number above.");
    }
  }

  if(message) {
    return <div className="text-center text-2xl">{message}</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center my-4 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Name
        </label>
        <input className="w-full p-2 flex-1 basis-64 bg-gray-200 rounded-md" {...register("name")}/>        
      </div>
      <div className="flex items-center my-4 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Phone
        </label>
        <input className="w-full p-2 flex-1 basis-64 bg-gray-200 rounded-md" {...register("phone")}/>        
      </div>
      <div className="flex items-center my-4 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Email
        </label>
        <input className="w-full p-2 flex-1 basis-64 bg-gray-200 rounded-md" {...register("email")}/>        
      </div>
      <div className="flex items-center my-4 flex-wrap">
        <label className="basis-32 max-w-[100px] flex-1">
          Message
        </label>
        <textarea className="w-full flex-1 basis-64 p-2 bg-gray-200 rounded-md" rows={3} {...register("message")}/>        
      </div>
      <div className="flex justify-center">
        <button className="px-4 py-2 bg-themeGreen text-white rounded-md" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ContactForm;