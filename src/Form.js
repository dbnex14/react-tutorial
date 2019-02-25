import React, {Component} from 'react';

// this component will update its state each time a field
// is changed in the form, and when Submit is clicked, all
// that data is passed to the App component state, which
// will then update Table
class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  }

  render() {
    const {name, job} = this.state;

    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />

        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />

        <input
          type="button"
          value="Submit"
          onClick={this.submitForm} />
      </form>
    );
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state); // pass Form's state
    this.setState(this.initialState); // clear fields after submit
  }
}

export default Form;
