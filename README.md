# pipe
pipe for ts

```ts
import { pipe } from "https://denopkg.com/gnlow/pipe"

pipe("Hello, World!",
    x => x.split(", "),
    x => x.map(x => x.repeat(2)),
    x => x.join(", "),
    console.log,
) // HelloHello, World!World!
```
