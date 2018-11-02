/**
 * Create by fay on 2018-11-02 16:04
 */
import React from 'react';
import Dialog from '../../../components/dialog';
import Button from '../../../components/button'

class Demo extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
    }

    onShow = () => {
        this.setState({show: true});
    };

    render(){
        const {show} = this.state;
        return (
            <div>
                <Button raised onClick={this.onShow}>Simple Dialog</Button>
                <Dialog
                    title='Choose a Ringtone'
                    show={show}>
                    <ul className="mdc-list mdc-list--avatar-list">
                        <li className="mdc-list-item" tabIndex="0" data-mdc-dialog-action="none">
                            <span className="mdc-list-item__text">None</span>
                        </li>
                        <li className="mdc-list-item" data-mdc-dialog-action="callisto">
                            <span className="mdc-list-item__text">Callisto</span>
                        </li>
                    </ul>
                </Dialog>
            </div>
        )
    }
}

export default Demo;