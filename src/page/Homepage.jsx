import React, { Component } from 'react';
import './homepage.css';
import Modal from '../component/Modal/Modal';

import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {showModal,closeModal,sendModal} from '../redux/Counter/actions';

class Homepage extends Component {
  constructor(){
    super();
    this.state={
      drivers:[],
      showModal:false,
      awal:0,
      akhir:2,
      perpage:2,
      page:0,
      active:1
    }
  }
  
  componentDidMount(){
    console.log("========Get DATA==========");
      axios.get('./drivers.json')
      .then(response => this.setState({drivers:response.data.drivers,page:response.data.drivers.length/this.state.perpage}))
   }

handlePageChange = (pageNumber) => {
  console.log(pageNumber)
    this.setState({ activePage: pageNumber });
}
click = (id) =>{
  this.props.showModal(id)
}

cancelHandler = () => {
  this.props.closeModal()
}

send = (val) =>{
  this.props.sendModal(val)
  alert("message :  "+val);
}

changePage=(num)=>{
  this.setState({awal:2*(num-1),akhir:2*num,active:num})
}
  render() {
    const pushPage=[]
    for (let i = 1; i <= this.state.page; i++) 
    {
      pushPage.push(<div className={this.state.active === i ? 'number active':'number'} onClick={()=>this.changePage(i)} >{i}</div>)
    }
    return (
      <div className="row">
        <h2>Notify My GO-JEK Driver App</h2>

        <table>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Suspended</th>
          <th>Action</th>


          <tbody>
            {this.state.drivers.slice(this.state.awal,this.state.akhir).map((p) => 
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.phone}</td>
              <td>{p.email}</td>
              <td>{p.suspended ? "YES" : "NO"}</td>
              <td>{p.suspended ? <button onClick={() => this.click(p.id)}>Notify</button> :""}</td>
            </tr>   
            )}
          </tbody>
        </table>
        
        <div className="paging">
        <p className="title">Paging :</p>
        {
          pushPage.map((x)=>x)
        }
        </div>
            <Modal show={this.props.show} modalClosed={this.cancelHandler} send={this.send}/>
      </div>
    );
  }
}


const mapStateToProps = (state) =>({
  show:state.counter.show,
  id:state.counter.id,
})


const mapDispatchToProps =(dispatch) =>bindActionCreators({
  showModal,closeModal,sendModal
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);