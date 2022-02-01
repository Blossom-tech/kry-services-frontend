import React from "react";
import axios from "axios";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      services:[],
      id:0,
      name:'',
      url:'',
    }
  }


  componentDidMount(){
    this.interval = setInterval(this.getData, 5000);
    this.getData();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData = () => {

    axios.get("https://kry-service.herokuapp.com/service/getAll")
    .then((res)=>{
      this.setState({
        services:res.data,
        id:0,
        name:'',
        url:'',
      })
    })

  }



  submit(event,id){
    event.preventDefault();
    if(id === 0){
      axios.post("https://kry-service.herokuapp.com/service/add",{
        name:this.state.name,
        url:this.state.url,
      })
      .then((res)=>{
        this.componentDidMount();
      })
    }else{
      axios.put(`https://kry-service.herokuapp.com/service/${id}`,{
        id:this.state.id,
        name:this.state.name,
        url:this.state.url,
      }).then(()=>{
        this.componentDidMount();
      })

    }

  }
  delete(id){
    axios.delete(`https://kry-service.herokuapp.com/service/${id}`)
    .then(()=>{
      this.componentDidMount();
    })
  }

  edit(id){
    axios.get(`https://kry-service.herokuapp.com/service/${id}`)
    .then((res)=>{
      console.log(res.data);
      this.setState({
        id:res.data.id,
        name:res.data.name,
        url:res.data.url,
      })
    })
  }

  render() {
  return (
    <div className="container">
      <title>Hello</title>

      <div className="row">
      <div className="col s6">
        <form onSubmit={(e)=>this.submit(e,this.state.id)}>
          <title>Hello</title>
        <div className="input-field col s12">
          <input onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} type="text" id="autocomplete-input" className="autocomplete"/>
          <label htmlFor="autocomplete-input">Enter Service Name</label>
        </div>
        <div className="input-field col s12">
          <input onChange={(e)=>this.setState({url:e.target.value})} value={this.state.url} type="text" id="autocomplete-input" className="autocomplete"/>
          <label htmlFor="autocomplete-input">Enter Service Url</label>
        </div>
        <button className="btn waves-effect waves-light right" type="submit" name="action">Add
          <i className="material-icons right"></i>
        </button>
        </form>
      </div>
      <div className="col s6"></div>
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Url</th>
              <th>Creation Time</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
        {
            this.state.services.map(service=>
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.url}</td>
                <td>{service.creation_time}</td>
                <td>{service.status}</td>
                <td>
                <button onClick={(e)=>this.edit(service.id)} className="btn waves-effect waves-light" type="submit" name="action">
                  <i className="material-icons">edit</i>
                </button>
                </td>
                <td>
                <button onClick={(e)=>this.delete(service.id)} className="btn waves-effect waves-light" type="submit" name="action">
                  <i className="material-icons">delete</i>
                </button>
                </td>
              </tr>
              )
          }
          
        </tbody>
      </table>
      </div>
    </div>
  );
}

}
export default App;
