import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      destination: "Japan",
      vegetarian: false,
      kosher: false,
      lactose_free: false,
      restrictions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRestriction = this.handleRestriction.bind(this);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });

    this.handleRestriction({name, checked});
  }

  handleRestriction(value) {
      switch (value.name) {
        case "vegetarian":
        case "lactose_free":
        case "kosher":
          if (value.checked) {
            this.setState(prev => {
              prev.restrictions.push(value.name);
            });
          } else {
            this.setState(prev => {
              prev.restrictions.splice(this.state.restrictions.indexOf(value.name), 1);
            });
          }
          break;

        default:
          break;
      }
  }

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        handleRestriction={this.handleRestriction}
        {...this.state}
      />
    )
  }
}
