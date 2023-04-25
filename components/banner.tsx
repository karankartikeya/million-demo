import React from 'react'
import { block } from 'million/react'

type Props = {}

function Banner({ }: Props) {
    return (
        <div>
            <h1 className='text-4xl text-red-300'>Welcome to the banner</h1>
        </div>
    )
}

const AppBlock = block(Banner)
export default AppBlock