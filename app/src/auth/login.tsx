import React from "react"
import {useFormState} from "@kurtbuilds/formstate"
import {Logo} from "src/app/logo"
import {useQuery} from "src/app/page"
import {set_user, USER_FIELDS} from "src/app/user_state"
import {gql_fetch3} from "src/gql/client"
import {useInit} from "src/lib/hook"
import {LoginContainer} from "src/component/auth.component"
import {Form, Input} from "src/component/form"
import {useNavigate} from "react-router-dom"
import {gql_mutation2} from "src/gql/query"

export const DEFAULT_NEXT_PAGE = "/account"

const log_in_password = gql_mutation2({
    log_in_password: {
        fields: USER_FIELDS,
        args: {email: String, password: String},
    }
})


const log_in_token = gql_mutation2({
    log_in_token: {
        fields: USER_FIELDS,
        args: {token: String},
    }
})

const send_login_email = gql_mutation2({
    send_login_email: {
        fields: USER_FIELDS,
        args: {email: String}
    }
})

export function Login() {
    const navigate = useNavigate()
    const form = useFormState({
        email: "",
        password: "",
    })

    const query = useQuery<Partial<{ next: string, token: string }>>()
    const next = query.next ?? DEFAULT_NEXT_PAGE

    useInit(async () => {
        if (query.token) {
            const {data, errors} = await gql_fetch3(log_in_token, {token: query.token})
            if (data) {
                set_user(data.log_in_token)
                navigate(next)
            } else if (errors) {
                form.set_form_errors(errors.map(e => e.message))
            }
        }
    })

    const handle_submit = async (e: any) => {
        e.preventDefault()
        if (form.password) {
            const {data, errors} = await gql_fetch3(log_in_password, form.form_data, {cache: false})
            if (data) {
                set_user(data.log_in_password)
                navigate(DEFAULT_NEXT_PAGE)
            } else if (errors) {
                form.set_form_errors(errors.map(e => e.message))
            }
        } else {
            const {data, errors} = await gql_fetch3(send_login_email, {email: form.email}, {cache: false})
            if (data) {
                form.set_form_success("Check your email to complete login.")
            } else if (errors) {
                form.set_form_errors(errors.map(e => e.message))
            }
        }
    }

    return <LoginContainer title="Log in to Your Account" logo={<Logo/>}>
        <Form className="space-y-6" onSubmit={handle_submit} alerts={form.form_alerts}>
            <Input name="email" label="Email address" type="email" autocomplete="email" required={true}
                   value={form.email} onChange={form.set_email} errors={form.errors.email}/>
            <Input name="password" label="Password" type="password" autocomplete="current-passowrd"
                   required={false} value={form.password} onChange={form.set_password}
                   errors={form.errors.password}/>
            <button type="submit"
                    className="w-full flex btn text-white bg-indigo-600 hover:bg-indigo-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {form.password ? "Log In" : "Log In via Email Link"}
            </button>
        </Form>
    </LoginContainer>
}
