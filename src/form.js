import { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="row">
        <form onSubmit={this.props.Senddata()}>
          <div className="input-field col s6">
            <div>
              <input
                onChange={this.addtodo}
                defaultValue="Alvin"
                id="first_name2"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="first_name2">
                Todo Name
              </label>
            </div>
            <div className>
              <span onClick={this.props.addtodo}>
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
