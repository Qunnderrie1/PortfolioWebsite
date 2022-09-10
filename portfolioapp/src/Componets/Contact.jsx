import React from 'react'
import { Component } from 'react'
import '../App.css'





class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            userText: "",
            firstName: "",
            lastName: ""
        }

        this.sendEmail = this.sendEmail.bind(this);
        this.getFirstName = this.getFirstName.bind(this);
        this.getLastName = this.getLastName.bind(this);
    }

    sendEmail(e){
        this.setState({
            userText: e.target.value,
        })

        e.preventDefault();

    }

    getFirstName(e){
        this.setState({
            firstName: e.target.value,
        })
    }

    getLastName(e){
        this.setState({
            lastName: e.target.value,
        })

    }


    
    render(){
        const mail = `mailto:Qunnderrie@gmail.com?&subject=message from ${this.state.firstName} ${this.state.lastName}&body=${this.state.userText}`
        console.log(this.state.userText)
        
        return (
            <div   id='contact' className='contactContainer container'>
                <hr />
                       <h2 className='headerText'>&#x3D;&gt; Let's Chat</h2>
                       <div className='contactForm'>
                        <form action="" method="post">
                            <div className="row">
                                <div className="col">
                                <input className='form-control' type="text" onChange={this.getFirstName}  value={this.state.firstName} name="userName"placeholder='First Name' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <input className='form-control' type="text"  onChange={this.getLastName} name="userEmail" value={this.state.lastName} placeholder='Last Name' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <textarea className='form-control' onChange={this.sendEmail} name="userText" value={this.state.userText} placeholder='Enter message here......' cols="10" rows="10" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <a href={mail}  className='btn sendBtn'>Send Message</a>
                                </div>
                            </div>
                        </form>
                       </div>
         </div>
        );
    }
}
export default Contact