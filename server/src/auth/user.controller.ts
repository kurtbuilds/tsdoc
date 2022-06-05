import {getConnection} from "typeorm";
import {User} from "./user.model";
import {Uuid} from "share/gqltype";


export async function get_user(uuid: Uuid): Promise<User> {
    let user = await getConnection().getRepository(User).findOne({uuid})
    return user!
}

export async function find_user(email: string): Promise<User | undefined> {
    return getConnection().getRepository(User).findOne({
        email,
    })
}
