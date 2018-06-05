import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane'

export default class ContactForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log('blue');
        fetch('https://mailthis.to/will.moraes.96@gmail.com', {
            method: 'POST',
            body: data,
        });
    }
    render() {
        return (
            <Form className={"col-8"} onSubmit={this.handleSubmit}>
                <FormGroup className={"row"}>
                    <Label className={"col-3"} for="name">Name:</Label>
                    <Input className={"col-7 Dkw-input"} type="text" name="nome" id="name" placeholder="Your name.." required/>
                </FormGroup>
                <FormGroup className={"row"}>
                    <Label className={"col-3"} for="email">Email:</Label>
                    <Input className={"col-7 Dkw-input"} type="email" name="_replyto" id="_replyto" placeholder="Your email.." required/>
                </FormGroup>
                <FormGroup className={"row"}>
                    <Label className={"col-3"} for="subject">Subject: </Label>
                    <Input className={"col-9 Dkw-input"} type="text" name="_subject" id="_subject" placeholder="Message Subject.." required/>
                </FormGroup>
                <FormGroup className={"row"}>
                    <Label className={"col-3"} for="message">Message:</Label>
                    <Input className={"col-9 Dkw-input"} type="textarea" name="message" id="message" required/>
                </FormGroup>
                <Button className={"Dkw-button col-3 "}>Submit   <FontAwesomeIcon icon={faPaperPlane}/></Button>
            </Form>
        );
    }
}