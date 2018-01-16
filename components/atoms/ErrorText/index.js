import React from 'react'

const ErrrorText = ({text}) => (
    <span>
        {text}
        <style jsx>{`
			span { color: red; }
		`}
        </style>
    </span>
)

export default ErrrorText
