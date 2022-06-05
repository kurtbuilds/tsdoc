import {User} from '../user.model'
import * as assert from '@kurtbuilds/assert'

it("create a user", () => {
    let u = new User()
    u.first_name = "Kurt"
    assert.equal(u.first_name, "Kurt")
    // its not set till saving to the database. wonder if this is something we can change.
    assert.nullish(u.uuid)
})