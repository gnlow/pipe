//@ts-nocheck

import { getable, pipable } from "./mod.ts"
import * as A from "https://denopkg.com/gnlow/deno-fp-ts/src/Array.ts"

const map = getable(A.map as any)
const double = pipable((n: number) => n * 2)
const log = pipable(console.log)
map(
    double +
    log
)([1,2,3])