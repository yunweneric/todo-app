import { Component } from "react";

class Form extends Component {
  state = {
    content: "",
  };

  Handelechange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  Handelesubmit = (e) => {
    e.preventDefault();
    this.props.Addtodo(this.state);
    this.setState({
      content:""
    })
  };
  render() {
    return (
      <div className="row">
        <form onSubmit={this.Handelesubmit}>
          <div className="input-field col s6">
            <div>
              <input
                onChange={this.Handelechange}
                id="first_name2"
                type="text"
                value = {this.state.content}
              />
              <label className="active" htmlFor="first_name2">
                Todo Name
              </label>
            </div>
            <div className>
              <span>
                <button className="waves-effect waves-light btn-small blue">
                  <i className="material-icons left"></i>Add
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
