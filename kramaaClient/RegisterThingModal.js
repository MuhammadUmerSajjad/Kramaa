import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, FormText,Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import ipfs from './ipfs';

class RegisterThingModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      thingName: '',
      thingDescription: '',
      thingAttributes: '',
      thingBrand: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  handleChange(e) {
    const { name, value } = e.target;
    console.log("name", name, "value", value);
    this.setState({ [name]: value });
    this.forceUpdate();
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.props.parentHandler(
      this.state.thingName,
      this.state.thingDescription,
      this.state.thingAttributes,
      this.state.thingBrand,
    )
  }

  render() {
    let projectName;
    console.log(this.props.projectName);
    if(this.props.projectName==null){
      projectName= "None";
    }
    else{
      projectName = this.props.projectName;
    }
    const {tokenIDTo, number,protocol, deviceType, registryID, sensor, deviceURN, thingName, thingDescription, thingAttributes, thingBrand} = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className="text-white bg-primary text-center">
              <CardBody onClick= {this.toggle}>
                <blockquote className="card-bodyquote">
                  <p>Add new thing</p>
                  <footer>+<i className="cui-tablet icons font-2xl d-block mt-4"></i></footer>
                </blockquote>
              </CardBody>
            </Card>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}><strong>New Thing Registration </strong></ModalHeader>
                <ModalBody>
                <Form className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Thing name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" name="thingName" value= {thingName} onChange={this.handleChange} id="text-input"  placeholder="Thing Name" />
                      <FormText color="muted">Enter Thing Name</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Thing description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" name="thingDescription" value= {thingDescription} onChange={this.handleChange} id="text-input"  placeholder="Thing description" />
                      <FormText color="muted">Enter Thing Description</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Thing Brand</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" name="thingBrand" value= {thingBrand} onChange={this.handleChange} id="text-input"  placeholder="Thing Brand" />
                      <FormText color="muted">Enter Thing Brand</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-multiple-input">Thing Attributes</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-multiple-input" name="thingAttributes" value= {thingAttributes} multiple />
                      <FormText color="muted">Enter upto a maximum of 3 pictures of the thing</FormText>
                    </Col>
                  </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick = {this.onSubmitForm} >Add new Thing</Button>
                </ModalFooter>
              </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterThingModal;
