import { cloneElement, Children } from 'react'

const Familia = (props) => {
    return (
        <div>
            <h2>Familia</h2>
            {props.children.map((child, index) => {
                return cloneElement(child, {...props, key: index})
            })}
        </div>
    )
}

export default Familia