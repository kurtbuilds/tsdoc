import {Err, Ok, Result, Serr} from "@kurtbuilds/lib"
import bcrypt from "bcrypt"
import {getConnection} from "typeorm"
import {User} from "./user.model"

const SALT_ROUNDS = 10


function valid_password(password: string): boolean {

    // TODO uncomment this if we want password validation

    // return password.length >= 12
    //     && !!/\d/.exec(password)
    //     && !!/[A-Z]/.exec(password)
    //     && !!/[a-z]/.exec(password)
    //     && !!/\d/.exec(password)
    //     && !!password.replace(/\w/g, '').trim()
    return true
}


export async function login(email: string, password: string): Promise<Result<User, Error>>{
    const user = await getConnection().getRepository(User).findOne({email: email.toLowerCase()})
    if (!user) {
        return Serr("User not found.")
    } else if (user.password_hash === null) {
        return Serr("Please log in by emailing a log-in link.")
    } else if (!(await bcrypt.compare(password, user.password_hash!))) {
        return Serr("Password did not match.")
    } else {
        return Ok(user)
    }
}


export async function register(email: string, password: string | null, timezone: string): Promise<Result<User, Error>> {
    const user = new User({
        email: email.toLowerCase(),
        timezone,
    })
    if (password !== null) {
        if (!valid_password(password)) {
            return Serr(`Your password must have at least 12 characters, and 
include an uppercase letter, a lowercase letter, a number, and a symbol. 
We recommend using a password manager like 1Password, Lastpass, Google Password Manager, or iCloud.`)
        }
        user.password_hash = await bcrypt.hash(password, SALT_ROUNDS)
    }
    return create_account(user)
}

export async function create_account(user: User): Promise<Result<User, Error>> {
    user.email = user.email.toLowerCase()
    const existing_user = await getConnection().getRepository(User).findOne({
        email: user.email
    })
    if (existing_user) {
        return Serr("A user with this email already exists. Try logging in instead.")
    }
    try {
        user = await getConnection().getRepository(User).save(user)
        return Ok(user)
    } catch (_e) {
        const e = _e as Error
        if (e.message.includes("duplicate key", 0)) {
            return Serr("A user with this email already exists. Try logging in instead.")
        }
        return Err(e)
    }
}