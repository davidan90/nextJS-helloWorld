import React from'react';

import Title from '../components/atoms/Title'
import Alink from '../components/atoms/Alink'

const HomePage = () => (
    <main>
        <Title text="Hello world!!" />
        <Alink path="/about" text="About" />
    </main>
)

export default HomePage
