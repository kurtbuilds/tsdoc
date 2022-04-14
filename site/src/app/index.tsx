import {Routes} from "./route"
import { useLocation } from "wouter-preact"

export function App() {
    const [location, navigate] = useLocation()

    return <Routes/>
}
