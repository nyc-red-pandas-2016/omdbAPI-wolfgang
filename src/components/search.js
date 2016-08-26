import React,{Component} from "react"
export default class Search extends Component{
  heldleSubmit(e){
    e.preventDefault();
    let searchData = this.refs.searchInput.value;
    this.props.onUpdate(searchData);
    // end of hendleSubmit()
  }

  render(){

    return(
        <div className="Search-bar">
          <form id="search-form" onSubmit={this.heldleSubmit.bind(this)}>
              <input ref="searchInput" type="text" name="search" placeholder="search movie"/>
              <button ref="submitButton" type="submit">Search</button>
          </form>
        </div>
      // end of return
    )
    // end of render
  }
  // end of component
}
