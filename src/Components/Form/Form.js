import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Description: "",
      arr:[],
      isUpdated:false,
      updatingIdx:0
    }
  }
  changeTitle(e) {
    this.setState({Title: e.target.value });
    
  }


    changeDes(e) {
        this.setState({Description: e.target.value});
        
    }
  add() {
    if(this.state.Title !== "" && this.state.Description !== ""){
    let _Title = JSON.parse(JSON.stringify(this.state.Title));
    let _Description = JSON.parse(JSON.stringify(this.state.Description));
    let _arr = JSON.parse(JSON.stringify(this.state.arr));
   
    if(this.state.isUpdated){
      _arr=_arr.filter((item, idx) => {
        if(idx===this.state.updatingIdx){
          item.Title=_Title;
          item.Description=_Description;
        }
        return item;
      });
    }else{
    _arr.push({Title:_Title, Description:_Description});
    }
  this.setState({Title: "", Description: "" ,arr:_arr,isUpdated:false});
    }
  }
  reset() {
    if(this.state.isUpdated){
        this.setState({Title: "", Description: "" ,isUpdated:false});
    }else{
    this.setState({ Title: "", Description: "",isUpdated:false});
    }
  }
  delete(idx) {
    let newArr=this.state.arr.filter((item, index) => {
        if (index !== idx) {
            return item;
        }
    });
    this.setState({arr: newArr});
  }
  Edit(idx) {
    this.state.arr.filter((item, index) => {
        if (index === idx) {
            this.setState({Title:item.Title, Description:item.Description, updatingIdx:idx});
        }
    });
    this.setState({isUpdated:true});
  }

  render() {
    let { arr } = this.state;
    console.log(arr);
    return (
      <div className="container">
        <h2 className="d-flex justify-content-center">Simple TODO List App</h2>
          <div className="form">
            <label>Title</label>
            <input type="text" className="form-control w-25" onChange={this.changeTitle.bind(this)} value={this.state.Title} />

            <label>Description</label>
            <textarea className="form-control w-25" onChange={this.changeDes.bind(this)} value={this.state.Description}></textarea>

           
            <button className="btn btn-primary m-2" 
                    onClick={this.add.bind(this)}>{!this.state.isUpdated?"Add":"Update"}</button>
            <button className="btn btn-warning m-2"
                    onClick={this.reset.bind(this)}>{!this.state.isUpdated?"Reset":"Cancel"}</button>
            <hr></hr>
          </div>
          <div>
            <ul>
            {arr.map((item, idx) => {
                    return (
                        <li key={idx} className="border-bottom p-2">
                        <h4>{item.Title}</h4>
                        <p>{item.Description}</p>
                        <button onClick={this.delete.bind(this,idx)} className="btn btn-danger">Delete</button>
                        <button onClick={this.Edit.bind(this,idx)} className="btn btn-secondary ms-4">Edit</button>
                        </li>
                    );
                })}
            </ul>
          </div>
        </div>
    )
  }
}
export default Form;