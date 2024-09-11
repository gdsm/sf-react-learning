import React, { useState } from 'react'

/*
There are many hooks.

Some basic hooks:
- useEffect
- useMemo (dynamic programming hook)
- useCallback : Helps in optimizing application
    const addChild = useCallback ( () => {
        setChildData([...data, "New Child Data"])
    }, [childData])
- useRef: To get hold of DOM element. 

Custom hooks can also be created for e.g for user authentication useAuthentication
*/
export function Hooks() {

    const [item, setItem] = useState<string>("Hi")

    const change = () => {
        setItem("Hello")
    }

    return <>
        <h2>{item} Hooks</h2>
        <button onClick={change}>Click to modify</button>
    </>
}

export default Hooks;