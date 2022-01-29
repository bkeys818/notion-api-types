import type { Users } from '../../../types/endpoints'
import { list } from '../global.test'
import { users, anyUser } from '../../responses'

const retrieveRes: Users.Retrieve.Response = anyUser

const listAllRes: Users.ListAll.Response = list([anyUser])

const retrieveMyBotRes: Users.RetrieveMyBot.Response = users.bot
