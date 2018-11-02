/**
 * Create by fay on 2018-11-01 23:57
 */
import React from 'react';
import './style/dialog.scss';
import {MDCDialog} from '@material/dialog';

class Dialog extends React.Component{

    constructor(props){
        super(props);
        this.dialogRef = React.createRef();
    }

    componentDidMount(){
        this.dialog = new MDCDialog(this.dialogRef.current);
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
        const {children, footer, title} = this.props;
        return (
            <div>
                <div className="mdc-dialog"
                     role="alertdialog"
                     aria-modal="true"
                     aria-labelledby="my-dialog-title"
                     aria-describedby="my-dialog-content" ref={this.dialogRef}>
                    <div className="mdc-dialog__container">
                        <div className="mdc-dialog__surface">
                            <h2 className="mdc-dialog__title" id="my-dialog-title">{title}</h2>
                            <div className="mdc-dialog__content" id="my-dialog-content">
                                {children}
                            </div>
                            {
                                footer &&
                                <footer className="mdc-dialog__actions">
                                    <button type="button" className="mdc-button mdc-dialog__button"
                                            data-mdc-dialog-action="close">Cancel
                                    </button>
                                    <button type="button" className="mdc-button mdc-dialog__button"
                                            data-mdc-dialog-action="accept">OK
                                    </button>
                                </footer>
                            }
                        </div>
                    </div>
                    <div className="mdc-dialog__scrim"/>
                </div>
            </div>
        )
    }
}

export default Dialog;