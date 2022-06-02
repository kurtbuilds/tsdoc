import React from "react"
import {useFormState} from "@kurtbuilds/formstate"
import {Logo} from "src/app/logo"
import {set_user, USER_FIELDS} from "src/app/user_state"
import {LoginContainer} from "src/component/auth.component"
import {Form, Input} from "src/component/form"
import {useNavigate} from "react-router-dom"
import {gql_fetch, gql_mutation} from "src/gql/client"


const sign_up_password = gql_mutation({
    sign_up_password: {
        fields: USER_FIELDS,
        args: {email: String, password: String, timezone: String}
    }
})

const sign_up_email = gql_mutation({
    sign_up_email: {
        fields: "",
        args: {email: String, timezone: String}
    }
})


export function get_timezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}


export function Signup() {
    const navigate = useNavigate()

    const form = useFormState({
        email: "",
        password: "",
    })

    const handle_submit = async (e: any) => {
        const timezone = get_timezone()
        e.preventDefault()
        if (form.password) {
            const res = await gql_fetch(sign_up_password, {
                timezone,
                ...form.form_data
            })
            res.map(data => {
                set_user(data.sign_up_password)
                navigate("/onboarding/link-accounts")
            })
            res.map_err(form.set_form_errors_from_gql)
        } else {
            const res = await gql_fetch(sign_up_email, {
                timezone,
                email: form.email,
            })
            res.map_err(form.set_form_errors_from_gql)
            res.map(_d => form.set_form_success("Check your email to complete signup."))
        }
    }

    return <LoginContainer title={"Sign in to Your Account"} logo={<Logo/>}>
        <Form className="space-y-6" onSubmit={handle_submit} alerts={form.form_alerts}>
            <Input name="email" label="Email address" type="email" autocomplete="email" required={true}
                   errors={form.errors.email}
                   value={form.email} onChange={form.set_email}/>
            <Input name="password" label="Password" type="password" autocomplete="current-passowrd"
                   required={false} value={form.password} onChange={form.set_password}
                   errors={form.errors.password}/>
            <button type="submit"
                    className="w-full flex btn text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {form.password ? "Create Account" : "Create Account via Email Link"}
            </button>
        </Form>
    </LoginContainer>
}