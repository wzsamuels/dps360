import React, {ReactNode} from "react"

interface ButtonProps {
  children: ReactNode
  className: string
  [x: string]: any
}

const Button = ({children, className, ...props} : ButtonProps) => {
  return (
    <button {...props} className={`${className} py-2 px-4 bg-white text-themeGreen border-2 border-white font-bold rounded-xl hover:opacity-70`}>
      {children}
    </button>
  )
}

export default Button