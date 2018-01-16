import React from 'react'
import Link from 'next/link'

const Alink = ({path, text}) => (
    <Link href={path}>
        <a>{text}</a>
    </Link>
)

export default Alink