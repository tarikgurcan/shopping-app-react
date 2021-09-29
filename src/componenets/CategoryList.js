import React, { Component } from "react";

export default class CategoryList extends Component {
    constructor(props){
        super(props)
        this.getCategories=this.getCategories.bind(this)
        this.state={
            categorylist:[],
        }
    }
    componentDidMount(){
        this.getCategories()
    }
    
    getCategories(){
        fetch("https://shopping-site-react.herokuapp.com/api/categories").then(resolve=>resolve.json())
        .then(data=>this.setState({categorylist:data})).catch(err=>console.log(err))
    }
  render() {
    return (
      <div>
        <div className="list-group mt-5">
            {this.state.categorylist.map((category)=>{
                return <div className={this.props.currenctCategory===category.categoryName?"list-group-item active":"list-group-item"} key={category.id} onClick={(e)=>this.props.selectCategory(category)}>{category.categoryName}</div>
            })}

        </div>
        <h4>{this.props.currenctCategory}</h4>
      </div>
    );
  }
}
