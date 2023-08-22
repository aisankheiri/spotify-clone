import { forwardRef } from "react"
import { TbFileX } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

interface InputProbs
    extends React.InputHTMLAttributes<HTMLInputElement> {}


const Input = forwardRef<HTMLInputElement,InputProbs>(({
    className,
    type ,
    disabled ,
    ...probs 
},ref)=>{
    return(
        <input
        type={type}
        className={twMerge(`
        flex
        w-full
        rounded-md
        bg-neutral-700
        border
        border-transparent
        px-3
        py-3
        text-sm
        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium
        placeholder:text-neutral-400
        disabeld:curspr-not-allowed
        disabeld:opacity-50
        focuc:outline-none

        `
        ,
        className
        )}
        disabled={disabled}
        ref={ref}
        {...probs}
        />
    )
});

Input.displayName="Input";

export default Input;
