import type { Files, File } from '../../types/requests'
import { index, AllUnionUsed } from '../utils'

export const external: Files.External = {
    external: { url: 'http://localhost:5050/assets/file.txt' },
}

export const file: Files.File = {
    file: { url: 'http://localhost:5050/assets/file.txt' },
}

const allFiles = [external, file]
const _: AllUnionUsed<File, typeof allFiles[number]> = undefined
const anyFile: File = allFiles[index]
export default anyFile
