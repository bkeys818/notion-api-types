import type { Blocks } from '../../../types/endpoints'
import { list } from '../global.test'
import { anyBlock } from '../../responses'

const removeRes: Blocks.Delete.Response = anyBlock

const retrieveRes: Blocks.Retrieve.Response = anyBlock

const updateRes: Blocks.Update.Response = anyBlock

const childrenAppendRes: Blocks.Children.Append.Response = list([anyBlock])

const childrenRetrieveRes: Blocks.Children.Retrieve.Response = list([anyBlock])
