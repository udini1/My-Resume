import React, { Component } from 'react'

export default class ToastMessage extends Component {

    state={
        message: 'none'        
    }
    

    render() {
        window.onload =()=>{
        setTimeout(()=>{
            this.setState({message: 'block'})
        }, 4000)
        setTimeout(()=>{
            this.setState({message: 'none'})
        }, 7000)
    }
    
        return (
            <div>
                
                <div id="toastMSG" style={{display: this.state.message, fontWeight: "bold" }}>Use FireFox for best experience</div>

            </div>
        )
    }
}
