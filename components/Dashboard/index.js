import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import WidgetModal from '../WidgetModal/'
import UserActivity from '../UserActivity/'
import './style.css';

class Dashboard extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      grid1: 'drag here',
      grid2: 'drag here',
      grid3: 'drag here',
      grid4: 'drag here',
      grid5: 'drag here',
      grid6: 'drag here',
      lastMoveGrid: 'grid1'
    }
  }
  componentDidMount() {
    this.setState({grid1: <UserActivity/>})
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    let id = ev.target.id;
    this.setState({[id]: <UserActivity/>})
    this.setState({lastMoveGrid: ev.target.id})
    this.setState({[this.state.lastMoveGrid]: 'drag here'})
  }


  render() {
    return (
      <div>

        <button style={{ float: 'right' }} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus" aria-hidden="true"></i> Add widget</button>

        <WidgetModal />

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} id="grid1" className="grid">{this.state.grid1}</div>
          <div onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} id="grid2" className="grid">{this.state.grid2}</div>
          <div onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} id="grid3" className="grid">{this.state.grid3}</div>
          <div onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} id="grid4" className="grid">{this.state.grid4}</div>
          <div onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} id="grid5" className="grid">{this.state.grid5}</div>
        </div>
        
      </div>
    )
  }

}


function mapStateToProp(state) {
  return state
}


export default connect(mapStateToProp)(Dashboard)

