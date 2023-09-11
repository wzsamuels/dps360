'use client'

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  phone: string
  email: string
  message: string
}

const ContactPage = () => {
  const {register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {

  }

  return (
    <div className="w-full flex justify-center">
      <div className="p-4 max-w-lg w-full">
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
        </form>
      </div>
    </div>
  )
}

export default ContactPage