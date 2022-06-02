import {Component} from "src/component"
import React, {ReactNode} from "react"
import {useNavigate} from "react-router-dom"

interface LoginContainerProps extends Component {
    logo: ReactNode
    title: string
}


export function LoginContainer(props: LoginContainerProps) {
    const navigate = useNavigate()

    return <div className="min-h-screen bg-gray-50 flex flex-col justify-center pb-12 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center w-full my-8 text-blue-300">
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
        {props.logo}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{props.title}</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                {props.children}
            </div>
        </div>
        <div className="mt-12">
            {/*   Empty spacer so that the <Back> on top doesn't hugely off-center the view. */}
        </div>
    </div>
}