import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';
import actions from '../../redux/actions.js'

class WidgetModal extends Component {

  constructor(props, context) {
    super(props, context)

  }

  addActivity() {
    this.props.dispatch(actions.con());
  }


  render() {
    return (
      <div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Add a widget</h4>
              </div>
              <div className="modal-body">

                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="list-group">
                        <a className="list-group-item active">Widget Directory</a>
                        <a href="#" className="list-group-item">My widget</a>

                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="container">
                        <div className="row" style={{border: '1px solid #f2f3f4', width: '60%', padding: '20px'}}>
                          <div className="col-md-4">

                            <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                                <span className="sr-only">60% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">User Activity <br/><p style={{color: 'gray'}}>For record user activity</p></div> 
                          <div className="col-md-4"><button  onClick={() => this.addActivity()} style={{ float: 'right' }} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus" aria-hidden="true"></i> Add widget</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


function mapStateToProp(state) {
  return state
}


export default connect(mapStateToProp)(WidgetModal)


