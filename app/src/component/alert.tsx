import React from "react"
import {Alert, AlertType, infallible} from "@kurtbuilds/lib"


export function alert_color(t: AlertType): string {
    switch (t) {
    case "danger": return "text-red-600"
    case "info": return "text-blue-300"
    case "success": return "text-green-500"
    case "warning": return "text-yellow-800"
    default: infallible(t)
    }
}

interface AlertsProps {
    alerts: Alert[] | null
    className?: string
}

export function Alerts({alerts, className = "mx-4"}: AlertsProps) {
    if (!alerts?.length) return null
    return <div className={className}>
        {alerts.map(a => <div key={a.message} className={alert_color(a.type)}
            dangerouslySetInnerHTML={a.html ? {__html: a.html} : undefined}>
            {a.html ? null : a.message}
        </div>)}
    </div>
}