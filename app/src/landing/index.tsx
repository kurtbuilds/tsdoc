import {Logo} from "src/app/logo"
import {Hero} from "src/landing/hero"
import {FooterBasic} from "src/component"
import {Link} from "react-router-dom"
import {DarkModeToggle} from "src/app/theme_context"



export function MenuPopover() {
    return <div className="flex justify-between items-center max-w-7xl mx-auto
                px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <Logo/>
        <div className="flex-grow md:hidden"/>
        <Link to="/login"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mr-4 md:hidden">
            Log In
        </Link>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Log In
            </Link>
            <Link to="/signup"
                  className="ml-8 whitespace-nowrap inline-flex items-center btn btn-primary">
                Sign Up
            </Link>
        </div>
    </div>
}


export function Header() {
    return <header>
        <MenuPopover/>
    </header>
}


export function Footer() {
    return <FooterBasic>
        Built by&nbsp;<a href="https://www.twitter.com/your-twitter-handle" target="_blank">@your-twitter-handle</a>
    </FooterBasic>
}


export function Landing() {
    return <div className={"flex flex-col min-h-full w-full min-h-full"}>
        <div className="mx-auto max-w-4xl w-full">
            <div className="flex justify-end">
                <DarkModeToggle/>
            </div>

            <h1 className="text-center font-bold mt-24 text-7xl">Typescript Docs</h1>
            <div className="max-w-xl w-full mx-auto">
                <input className="border w-full border-black rounded-lg p-1 border-2 mt-6" placeholder="Search..."/>
            </div>
            <div className="text-center text-xl mt-6 grid grid-cols-2">
                <div className="flex justify-end">
                    <strong>1,000</strong>
                </div>
                <div className="flex justify-start ml-1">libraries</div>
                <div className="flex justify-end">
                    <strong>10,000</strong>
                </div>
                <div className="flex justify-start ml-1">visitors last month</div>
            </div>
            <div className="grid grid-cols-2 mt-6 max-w-xl mx-auto">
                <div className="">
                    <h3 className="font-bold text-xl">Recent Packages</h3>
                    <Link className="text-blue-500 hover:text-blue-700" to="/query-registry/2.5.0">query-registry</Link>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Recent Packages</h3>
                    <Link className="text-blue-500 hover:text-blue-700" to="/query-registry/2.5.0">query-registry</Link>
                </div>
            </div>
            <div>

            </div>
        </div>
        {/*<Header/>*/}
        {/*<Hero/>*/}
        {/*<Footer/>*/}
    </div>
}