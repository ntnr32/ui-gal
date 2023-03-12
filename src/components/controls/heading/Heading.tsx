import React from 'react'

interface HeadingProps {
    children?: React.ReactNode;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
    return (
        <h1 {...props}>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                {children}
            </span>
        </h1>
    )
}

export default Heading