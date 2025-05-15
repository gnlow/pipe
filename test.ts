import { pipe } from "./mod.ts"

pipe("Hello, World!",
    x => x.split(", "),
    x => x.map(x => x.repeat(2)),
    x => x.join(", "),
    console.log,
) // HelloHello, World!World!
