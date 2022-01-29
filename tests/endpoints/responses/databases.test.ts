import type { Databases } from '../../../types/endpoints'
import { list } from '../global.test'
import { database, page } from '../../responses'

const createRes: Databases.Create.Response = database

const queryRes: Databases.Query.Response = list([page])

const retrieveRes: Databases.Retrieve.Response = database

const updateRes: Databases.Update.Response = database
