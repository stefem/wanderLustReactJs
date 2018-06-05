import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state = {
            term : ''
        }
    }

    search = () => {
        this.props.onSearch (this.state.term);
    }

    handleTermChange = (e) => {
        this.setState({
          term: e.target.value
        })
    }

    handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        this.search();
      }
    }

    render() {
        return (
            <div className="SearchBar">
                <input type="text" id="city" placeholder="Enter A City or Town" onChange = {this.handleTermChange} onKeyDown={this.handleKeyDown} />
                <button id="button" onClick={this.search}>Submit</button>              
            </div>
        );
    }
};

export default SearchBar;