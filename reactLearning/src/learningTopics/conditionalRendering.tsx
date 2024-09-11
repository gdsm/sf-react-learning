import React from 'react'
 
export function ConditionalRendering() {
    const condition = false
    return <> 
        { condition ? <p data-testid='TrueCond'>True case</p> : <p data-testid='FalseCond'>False case</p> }
    </>
}

export default ConditionalRendering