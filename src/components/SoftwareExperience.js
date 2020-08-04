import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SoftwareExperience extends Component {

    state={
        reactJsInfo : '- Currently practicing on my own project in React',
        showReactJsInfo : false,
        javaScriptInfo: ' - Currently practicing skills in vanilla JS',
        showJsInfo: false
        
    }

    extraInfo=()=>{
        if (this.state.showInfo === 'none'){
            this.setState({showInfo: 'block'})
        } else {
            this.setState({showInfo: 'none'})
        }
    }

    render() {
        console.log(this.state.showJsInfo)
        return (
            <div>
                <h3>Software Experience</h3>
            <br/>
                <div style={{margin: 'auto', width: '300px'}}>
                    <h4>Visual Studio Code</h4>

                    <ul style={{listStyleType: 'none',marginRight: '30px'}}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript &nbsp;<span id="info" title='Click for more info' onClick={()=>this.setState({showJsInfo: !this.state.showJsInfo})}>*</span></li>
                        <span style={{display: this.state.showJsInfo === false ? 'none' : 'block' , fontSize: '14px'}}>{this.state.javaScriptInfo}</span>                        
                        <li>React JS  &nbsp;<span id="info" title='Click for more info' onClick={()=>this.setState({showReactJsInfo: !this.state.showReactJsInfo})}>*</span></li>
                        <span style={{display: this.state.showReactJsInfo === false ? 'none' : 'block' , fontSize: '14px'}}>{this.state.reactJsInfo}</span>                       
                    </ul>
                    <div id="projectsExamples">
                        <h5>Projects</h5>
                        <p>Sudoku - <a href="https://sudoku-project.netlify.app/">Click Here</a></p>
                        <p>Smart House - <a href="https://smart-house.netlify.app/">Click Here</a></p>
                        <p>Test Zone - <a href="https://mytestzone.netlify.app/">Click Here</a></p>
                    </div>
                </div>
                <br/>
                <div>
                    <h4>Adobe <span style={{fontSize:'10px'}}>(basic knowledge)</span></h4>

                    <ul style={{listStyleType: 'none',marginRight: '30px'}}>
                        <li>Photoshop</li>
                        <li>illustrator</li>
                        <li>InDesign</li>
                        
                    </ul>
                </div>
                
            <Link to="/" >Go back</Link>
            </div>
        )
    }
}
