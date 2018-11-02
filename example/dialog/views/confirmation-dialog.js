/**
 * Create by fay on 2018-11-02 16:05
 */
import React from 'react';
import Dialog from '../../../components/dialog';
import Button from '../../../components/button'

class Demo extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    onShow = () => {
        this.setState({show: true});
    };

    render(){
        const {show} = this.state;
        return (
            <div>
                <Button raised onClick={this.onShow}>Confirmation Dialog</Button>
                <Dialog
                    title='Choose a Ringtone'
                    show={show}
                    footer
                >
                    <ul className="mdc-list">
                        <li className="mdc-list-item" tabIndex="0">
                                        <span className="mdc-list-item__graphic">
                                          <div className="mdc-radio">
                                            <input className="mdc-radio__native-control"
                                                   type="radio"
                                                   id="test-dialog-baseline-confirmation-radio-1"
                                                   name="test-dialog-baseline-confirmation-radio-group"
                                                   checked readOnly/>
                                            <div className="mdc-radio__background">
                                              <div className="mdc-radio__outer-circle"></div>
                                              <div className="mdc-radio__inner-circle"></div>
                                            </div>
                                          </div>
                                        </span>
                            <label id="test-dialog-baseline-confirmation-radio-1-label"
                                   htmlFor="test-dialog-baseline-confirmation-radio-1"
                                   className="mdc-list-item__text">None</label>
                        </li>
                    </ul>
                </Dialog>
            </div>
        )
    }
}

export default Demo;