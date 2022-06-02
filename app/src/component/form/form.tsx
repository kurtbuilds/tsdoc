import {Alert} from "@kurtbuilds/lib"
import {Component} from ".."
import {Alerts} from "../alert"
import React, {FormEvent} from "react"


interface SectionProps extends Component {
    title: string,
    description: string,
}

export function Section({children, ...props}: SectionProps) {
    return <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">{props.title}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{props.description}</p>
        </div>
        <div className="space-y-6 sm:space-y-5">
            {children}
        </div>
    </div>
}


interface FormProps extends Component {
    alerts: Alert[] | null
    onSubmit: (e: FormEvent) => void,
}


export function Form({className, children, alerts, onSubmit}: FormProps) {
    return <form {...{className, onSubmit}}>
        <Alerts alerts={alerts} className="text-sm"/>
        {children}
    </form>
}


interface ButtonProps {
    value: string
}

export function SubmitButton({value}: ButtonProps) {
    return <button type="submit"
        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {value}
    </button>
}

export function CancelButton({value}: ButtonProps) {
    return <button type="button"
        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
        {value}
    </button>
}


export function ButtonRow({children}: Component) {
    return <div className="pt-5">
        <div className="flex justify-end">
            {children}
        </div>
    </div>
}


export function Submit() {
    return <ButtonRow>
        <SubmitButton value="Submit"/>
    </ButtonRow>
}