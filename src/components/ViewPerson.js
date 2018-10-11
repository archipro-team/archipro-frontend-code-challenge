import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ViewPerson.css'

//bootstrap modal to view a user's details
class ViewPerson extends Component {

  state = {
    modal : false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <span className="modal__text" onClick={this.toggle}>{this.props.name}</span>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          <div className="modal__modalHeading">
            <div>
                <img src={this.props.picture} alt={this.props.name.charAt(0)}/>
            </div>
            <div>
                {this.props.name} <br /> 
                <sup>{this.props.company} 
                (<em>{this.props.isActive ? "Active user" : "Inactive User"}</em>)
                </sup>
            </div>
          </div>          
          </ModalHeader>
          <ModalBody>
           {this.props.about}
          </ModalBody>
          <ModalFooter>
            {this.props.address}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ViewPerson;