import React, {use} from 'react'
import './main.css'
import Schedule from './Schedule'
import Trend from './Trend'
import Blog from './Blog'
import BackToTopBtn from '../components/BackToTopBtn'


function Main() {
    return (
        <main>
            <Schedule/>
            <Trend/>
            <Blog/>
            <BackToTopBtn/>
        </main>
    )
}

export default Main
