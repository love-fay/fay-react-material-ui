import React from 'react';
import './style/drawer.scss';
import {MDCList} from "@material/list";
import List from './list';
import classnames from 'classnames';
import {MDCDrawer} from "@material/drawer";

class Drawer extends React.Component{

    constructor(props){
        super(props);
        this.list = React.createRef();
        this.drawer = React.createRef();
    }

    componentDidMount(){
        if(this.props.type){
            this.drawerMDC = MDCDrawer.attachTo(this.drawer.current);
            this.drawerMDC.open = this.props.open;
        }else{
            const list = MDCList.attachTo(this.list.current);
            list.wrapFocus = true;
        }
    }

    componentWillReceiveProps(nextProps){
        const {open} = nextProps;
        if(this.drawerMDC) this.drawerMDC.open=open;
    }

    render(){
        const {list, header, type} = this.props;
        let headerContent = '';
        if(header){
            const {title, subtitle} = header;
            headerContent = <div className="mdc-drawer__header">
                <h3 className="mdc-drawer__title">{title}</h3>
                <h6 className="mdc-drawer__subtitle">{subtitle}</h6>
            </div>
        }
        return (
            <aside className={classnames("mdc-drawer", {["mdc-drawer--"+type]:type})} ref={this.drawer}>
                {headerContent}
                <div className="mdc-drawer__content">
                    <nav className="mdc-list" ref={this.list}>
                        <List data={list}/>
                    </nav>
                </div>
            </aside>
        )
    }
}

export default Drawer;