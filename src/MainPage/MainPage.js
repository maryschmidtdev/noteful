import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note'

class MainPage extends Component {
    render () {
        return (
            <div>
            <h1>Home Page - Lists all the notes</h1>
            <Note />
            </div>
        )
    }
}
export default MainPage