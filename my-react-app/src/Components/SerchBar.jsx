import React from "react";
import './_SearchBar.css'

class SerchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { query: "" };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      const query = event.target.value;
      this.setState({ query });
      this.props.onChange(query);
    }
  
    render() {
      return (
        <div className="Sbar">
          <input
            type="text"
            placeholder={this.props.placeholder}
            value={this.state.query}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
export default SerchBar;
  