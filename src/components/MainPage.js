import React, { Component } from 'react';
import MyPic1 from '../pictures/MyPic1.jpg'
import Languages from './Languages';
import MilitaryService from './MilitaryService';
import { Link } from 'react-router-dom';
export default class MainPage extends Component {

    state={
        hidePicture: 'block',
        showPrivateInfo: 'none',
        showLeftSideTabs: 'none',
        showRightSideTabs: 'none',
        showLanguages: false,
        showMilitaryService: false,
        showSkillsSection: 'none',
        showGeneralSkills: {
            firstObj: 'none',
            secondObj: 'none',
            thirdObj: 'none',
            fourthObj: 'none',
            fifthObj: 'none'
        },
        buttonBackgrounds: {
            militaryServiceBtn:'',
            languagesBtn: '',
            generalSkillsBtn: '',
            clicked: ''
        },
    }
    
    runTransition=()=>{
        let pictureTransition = document.getElementById('myPicture');
        pictureTransition.classList.toggle('animatePicture')
        setTimeout(() => {
            this.setState({hidePicture: 'none'})
            this.setState({showPrivateInfo: 'flex'})
        }, 1000);
        
        
        
    }
    
    goToWorkExperience=()=>{
        this.props.history.push('/WorkExperience')
    }

    goToEducation=()=>{
        this.props.history.push('/Education')
    }

    showGeneralSkills=()=>{
        if (this.state.showSkillsSection === 'none'){
            this.setState({showSkillsSection: 'flex'})
                setTimeout(() => {
                    this.setState({showGeneralSkills: {...this.state.showGeneralSkills, firstObj: 'block'}})
                }, 800);
                setTimeout(() => {
                    this.setState({showGeneralSkills: {...this.state.showGeneralSkills, secondObj: 'block'}})
                }, 1600);
                setTimeout(() => {
                    this.setState({showGeneralSkills: {...this.state.showGeneralSkills, thirdObj: 'block'}})
                }, 2400);
                setTimeout(() => {
                    this.setState({showGeneralSkills: {...this.state.showGeneralSkills, fourthObj: 'block'}})
                }, 3200);
                setTimeout(() => {
                    this.setState({showGeneralSkills: {...this.state.showGeneralSkills, fifthObj: 'block'}})
                }, 4000);
        } else {
            this.setState({showSkillsSection: 'none'})
            this.setState({showGeneralSkills: {firstObj: 'none' ,secondObj: 'none' ,thirdObj: 'none' ,fourthObj: 'none' ,fifthObj: 'none'}})
        }
    

        if (this.state.buttonBackgrounds.generalSkillsBtn === ''){
            this.setState({buttonBackgrounds: {...this.state.buttonBackgrounds, generalSkillsBtn: 'buttonClicked'}})
        } else if (this.state.buttonBackgrounds.generalSkillsBtn === 'buttonClicked'){
            this.setState({buttonBackgrounds: {...this.state.buttonBackgrounds, generalSkillsBtn: ''}})
        }
    }
    
    showLanguages=()=>{
        if (this.state.showLanguages === false){
            this.setState({showLanguages: true})
        } else if (this.state.showLanguages === true) {
            this.setState({showLanguages: false})
        }

    
        if (this.state.buttonBackgrounds.languagesBtn === ''){
            this.setState({buttonBackgrounds: {...this.state.buttonBackgrounds, languagesBtn: 'buttonClicked'}})
        } else if (this.state.buttonBackgrounds.languagesBtn === 'buttonClicked'){
            this.setState({buttonBackgrounds: {...this.state.buttonBackgrounds, languagesBtn: ''}})
        }
        
    }

    showMilitaryService=()=>{    
        if (this.state.showMilitaryService === false){
            this.setState({showMilitaryService: true})
        } else if (this.state.showMilitaryService === true) {
            this.setState({showMilitaryService: false})
        }
        
        if (this.state.buttonBackgrounds.militaryServiceBtn === ''){
            this.setState({buttonBackgrounds: {...this.state.buttonBackgrounds, militaryServiceBtn: 'buttonClicked'}})
        } else if (this.state.buttonBackgrounds.militaryServiceBtn === 'buttonClicked'){
            this.setState({buttonBackgrounds: {...this.state.buttonBackgrounds, militaryServiceBtn: ''}})
        }
    }


    goToSoftwareExperience=()=>{
        this.props.history.push('/SoftwareExperience')
    }

    render() {
        console.log(this.state.buttonBackgrounds.militaryServiceBtn)
        // console.log(this.state.buttonBackgrounds.generalSkillsBtn)
        return (
            <div>

                <div className="layout">
                    {/* The HTML of the left side Tabs/Buttons  */}
                    <div id="leftSideTabs">
                        <div>
                        <button id="workExperienceBtn" onClick={this.goToWorkExperience}>Work Experience</button><br/>
                        </div>
                        <button id="softwareExperienceBtn" style={{marginRight: '60px'}} onClick={this.goToSoftwareExperience}>Software Experience</button><br/>
                        <button onClick={this.goToEducation}>Education</button>
                    </div>

                    {/* The HTML of the middle of the page - where lays the picture and info */}
                    <div className="pictureSection">
                        <div> 
                            <img id="myPicture" style={{display: this.state.hidePicture}} onClick={this.runTransition} src={MyPic1} alt="my picture here"/>
                        </div>

                        <div id="privateInfo" style={{display: this.state.showPrivateInfo}} >
                                <svg id="leftSvg" width="50" height="140">
                                    <path d="M 50 140 C 30 130, 0 50, 50 0" stroke="black" fill="transparent"/>
                                </svg>
                                <div id="details">
                                    <p>Udi Ben Harush</p>
                                    <p>Udini100@gmail.com</p>
                                    <p>052-6055834</p>
                                    <Link to="/aboutMe">More Info</Link>
                                </div>
                                <svg id="rightSvg" width="50" height="140">
                                <path d="M 0 140 C 30 110, 50 50, 0 00" stroke="black" fill="transparent"/>
                                </svg>
                        </div>
                    </div>
                    
                    {/* The HTML of the right side Tabs/Buttons  */}
                    <div id="rightSideTabs">
                        <button id={this.state.buttonBackgrounds.militaryServiceBtn} onClick={this.showMilitaryService}>Military Service</button>
                            <div style={{display: this.state.showMilitaryService === true ? 'block' : 'none'}}>
                                <MilitaryService/>
                            </div>

                        <br/>

                        <button id={this.state.buttonBackgrounds.languagesBtn} style={{marginLeft: '50px'}} onClick={this.showLanguages}>Languages</button>
                            <div style={{display: this.state.showLanguages === true ? 'block' : 'none'}}>
                                <Languages/>
                            </div>

                        <br/>

                        <button id={this.state.buttonBackgrounds.generalSkillsBtn} onClick={this.showGeneralSkills}>General Skills</button>
                    </div>

                </div>
                    <br/>
                    <br/>
                    <div style={{display: this.state.showSkillsSection}}>
                        <div className="generalSkills">
                            <p style={{display: this.state.showGeneralSkills.firstObj, marginRight: '20px', fontWeight: 'bold'}}>Independet </p>
                            <p style={{display: this.state.showGeneralSkills.secondObj, marginRight: '20px', fontWeight: 'bold'}}>Creative</p>
                            <p style={{display: this.state.showGeneralSkills.thirdObj, marginRight: '20px', fontWeight: 'bold'}}>High work ethics</p>
                            <p style={{display: this.state.showGeneralSkills.fourthObj, marginRight: '20px', fontWeight: 'bold'}}>Good human relations</p>
                            <p style={{display: this.state.showGeneralSkills.fifthObj, marginRight: '20px', fontWeight: 'bold'}}>Team player</p>
                        </div>
                    </div>

           
            <br/>
            
            </div>
        )
    }
}
