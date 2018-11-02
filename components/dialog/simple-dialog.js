/**
 * Create by fay on 2018-11-01 23:57
 */
import React from 'react';
import './style/dialog.scss';
import {MDCDialog} from '@material/dialog';
import {MDCList} from '@material/list';

class Dialog extends React.Component{

    constructor(props){
        super(props);
        this.dialogRef = React.createRef();
    }

    componentDidMount(){
        this.dialog = new MDCDialog(this.dialogRef.current);
        // const list = new MDCList(document.querySelector('.mdc-dialog .mdc-list'));
        // dialog.listen('MDCDialog:opened', () => {
        //     list.layout();
        // });
        this.showChange();
    }

    showChange = () => {
        const {show} = this.props;
        show ? this.dialog.open() : this.dialog.close();
    };

    componentDidUpdate(){
        this.showChange();
    }

    render(){
        return (
            <div>
                <div className="mdc-dialog"
                     role="alertdialog"
                     aria-modal="true"
                     aria-labelledby="my-dialog-title"
                     aria-describedby="my-dialog-content" ref={this.dialogRef}>
                    <div className="mdc-dialog__container">
                        <div className="mdc-dialog__surface">
                            <h2 className="mdc-dialog__title" id="my-dialog-title">Choose a Ringtone</h2>
                            <div className="mdc-dialog__content" id="my-dialog-content">
                                <ul className="mdc-list mdc-list--avatar-list">
                                    <li className="mdc-list-item" tabIndex="0" data-mdc-dialog-action="none">
                                        <span className="mdc-list-item__text">None</span>
                                    </li>
                                    <li className="mdc-list-item" data-mdc-dialog-action="callisto">
                                        <span className="mdc-list-item__text">Callisto</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mdc-dialog__scrim"></div>
                </div>
            </div>
        )
    }
}

export default Dialog;