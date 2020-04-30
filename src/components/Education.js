import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Education extends Component {
    render() {
        return (
            <div>
                    <h3>Education</h3>

                    <ul style={{lineHeight: '2em'}}>
                        <li>    Course certificate of Web development - <b>Front End Developer</b> at "SV College" , in Tel-Aviv city. </li>
                        <li>    Course certificate of Graphic Design at "Habetzefer", in Tel-Aviv city. </li>
                        <li>    Complete 12 years of study at "Aloomim" elementary school and "Hertzog" high-school, in Holon city. </li>
                    </ul>
            <br/>
                <Link to="/">Go back</Link>
            </div>
        )
    }
}
