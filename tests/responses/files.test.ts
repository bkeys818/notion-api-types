import type { Files, File } from '../../types/responses'
import { index, AllUnionUsed } from '../utils'

export const external: Files.External = {
    external: { url: 'http://localhost:5050/assets/file.txt' },
    type: 'external',
}

export const file: Files.File = {
    file: {
        expiry_time: 'some_expiry_time',
        url: 'http://localhost:5050/assets/file.txt',
    },
    type: 'file',
}

const allFiles = [external, file]
const _: AllUnionUsed<File, typeof allFiles[number]> = undefined
const anyFile: File = allFiles[index]
export default anyFile
