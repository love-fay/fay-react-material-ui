import React from 'react';
import './style/top-bar.scss';
import Icon from '../icon';
import {MDCTopAppBar} from "@material/top-app-bar";
import Drawer from './drawer';

class TopBar extends React.Component{

    constructor(props){
        super(props);
        this.appBar = React.createRef();
        this.mainContent = React.createRef();
        this.state = {
            open: props.open
        }
    }

    componentDidMount(){
        const topAppBar = MDCTopAppBar.attachTo(this.appBar.current);
        topAppBar.setScrollTarget(this.mainContent.current);
        topAppBar.listen('MDCTopAppBar:nav', () => {
            // drawer.open = !drawer.open;
            this.setState({
                open: !this.state.open
            })
        });
    }

    scrimOnMouseDown = () => {
        this.setState({
            open: !this.state.open
        })
    };

    render(){
        const {list, topBarTitle, children, modal, header} = this.props;
        const {open} = this.state;
        return (
            <div className="frm-drawer-modal">
                <Drawer list={list} type={modal?'modal':'dismissible'} open={open} header={header}/>
                {modal && <div className="mdc-drawer-scrim" onMouseDown={this.scrimOnMouseDown}/>}
                <div className="mdc-drawer-app-content">
                    <header className="mdc-top-app-bar frm-app-bar" ref={this.appBar}>
                        <div className="mdc-top-app-bar__row">
                            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                                <a className="mdc-top-app-bar__navigation-icon" style={{overflow: 'hidden'}}><Icon type='menu'/></a>
                                <span className="mdc-top-app-bar__title">{topBarTitle}</span>
                            </section>
                        </div>
                    </header>

                    <main className="frm-main-content" ref={this.mainContent}>
                        <div className="mdc-top-app-bar--fixed-adjust">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default TopBar;