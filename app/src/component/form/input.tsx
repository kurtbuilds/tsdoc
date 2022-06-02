import React from "react"

export type InputType = "text" | "date" | "number" | "email" | "password"

interface InputProps {
    label: string
    type: InputType
    name: string,
    autocomplete?: string,
    errors: string[] | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    value: string,
    placeholder?: string,
    tabIndex?: number,
}

export function Input(props: InputProps) {
    return <div className="">
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
            {props.label}
        </label>
        <div className="mt-1">
            <input
                tabIndex={props.tabIndex}
                type={props.type}
                name={props.name}
                id={props.name}
                autoComplete={props.autocomplete}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>
    </div>
}