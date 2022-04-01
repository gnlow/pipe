import { flow } from "https://denopkg.com/gnlow/deno-fp-ts/src/function.ts"

const funcs: Record<string, Function> = {}

function str2func(str: string): Function {
    //@ts-ignore
    return flow(...str.slice(0, -1).split(",").map(s => funcs[s]))
}
export function getable(func: (f: Function) => unknown) {
    return (f: Function | string) => {
        console.log(f)
        if (typeof f == "string") {
            return func(str2func(f))
        } else {
            return func(f)
        }
    }
}
function randName() {
    return Math.random().toString(36).substr(2,6)
}
export function pipable(func: Function) {
    const name = func.name == "" ? randName() : func.name
    funcs[name] = func
    //@ts-ignore
    func[Symbol.toPrimitive] = function() {
        return name + ","
    }
    return func
}