import React, {useState, useEffect} from 'react'
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
        </main>
    )
}

export default Main
