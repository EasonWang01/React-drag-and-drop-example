import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

class UserActivity extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      userData: [],
      users: [],
      userNumShow: 5
    }
  }
  componentDidMount() {
    let nextProps = this.props;
    if (!nextProps.data) {
      return
    }
    let userData = nextProps.data.users;
    userData.map(d => {
      return Object.assign(d, { WeeklyPercent: nextProps.data.weekly[d.id] })
    })
    userData.sort((a, b) => (b.WeeklyPercent - a.WeeklyPercent));
    this.setState({ userData });
    this.setState({ users: userData });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data)
    let userData = nextProps.data.users;
    userData.map(d => {
      return Object.assign(d, { WeeklyPercent: nextProps.data.weekly[d.id] })
    })
    userData.sort((a, b) => (b.WeeklyPercent - a.WeeklyPercent));
    console.log(userData)
    this.setState({ userData });
    this.setState({ users: userData.slice(0, this.state.userNumShow) });
  }

  changeUserNum(e) {
    this.setState({ userNumShow: e.target.value }, () => {
      this.setState({ users: this.state.userData.slice(0, this.state.userNumShow) });
    })

  }

  clickHigh() {
    let userData = this.state.userData.sort((a, b) => (b.WeeklyPercent - a.WeeklyPercent));
    this.setState({ userData }, () => {
      this.setState({ users: this.state.userData.slice(0, this.state.userNumShow) });
    });
  }

  clickLow() {
    let userData = this.state.userData.sort((a, b) => (a.WeeklyPercent - b.WeeklyPercent));
    this.setState({ userData }, () => {
      this.setState({ users: this.state.userData.slice(0, this.state.userNumShow) });
    });

  }

  render() {
    return (
      <div>
        <div draggable="true" onDragStart={(event) => this.drag(event)} className="card">
          <div className="card-block">
            <div style={{ padding: '2px', borderBottom: '1px solid gray', display: 'flex' }} className="card-title">
              <p>User activity</p>
              <button style={{ marginLeft: 'auto' }}>Weekly</button>


              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><i className="fa fa-align-justify" aria-hidden="true"></i>
                  <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a data-toggle="modal" data-target="#edit" href="#">Edit Widget</a></li>
                  <li><a href="#">Delete Widget</a></li>
                </ul>
              </div>

              <div id="edit" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Top highest percentage of Mobile Time Users</h4>
                    </div>
                    <div className="modal-body">

                      <p style={{ color: 'gray' }}>Number of Users</p>
                      <input onChange={(e) => this.changeUserNum(e)} style={{ width: '200px' }} type="number" defaultValue={this.state.userNumShow} max="5" min="1" />


                      <p style={{ color: 'gray', marginTop: '10px' }}>Activity</p>
                      <div style={{ display: 'flex' }}>
                        <div>
                          <label><input onClick={() => this.clickHigh()} type="radio" name="optradio" />Highest</label>
                        </div>
                        <div style={{ marginLeft: '10px' }}>
                          <label><input onClick={() => this.clickLow()} type="radio" name="optradio" />Lowest</label>
                        </div>
                      </div>

                      <div className="form-group">
                        <label style={{ color: 'gray', marginTop: '10px' }} htmlFor="sel1">Time</label>
                        <select className="form-control" id="sel1">
                          <option>Mobile Time</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label style={{ color: 'gray', marginTop: '10px' }} htmlFor="sel1">Date</label>
                        <select className="form-control" id="sel1">
                          <option>Weekly</option>
                        </select>
                      </div>


                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                    </div>
                  </div>
                </div>
              </div>



            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ marginTop: '10px' }}>
                {this.state.users.map((d, i) => (
                  <p key={i}>{d.name} {d.lastname}</p>
                ))}
              </div>

              <div>
                {
                  this.state.users.map((d, i) => (
                    <div key={i} style={{ height: '10px', marginTop: '15px' }} className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} style={{ width: `${d.WeeklyPercent * 2}px` }}>
                      </div>
                    </div>
                  ))
                }
              </div>



              <div style={{ marginTop: '10px', marginLeft: '5px' }}>
                {this.state.users.map((d, i) => (
                  <p key={i}>{d.WeeklyPercent} %</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

}


function mapStateToProp(state) {
  return state.userActivity
}


export default connect(mapStateToProp)(UserActivity)


