import type { Search } from '../../../types/endpoints'
import { list } from '../global.test'
import { database, page } from '../../responses'

const searchRes: Search.Response = list([database, page])
