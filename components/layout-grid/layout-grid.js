import React from 'react';
import './style/index.scss';
import Icon from '../icon';
import classnames from 'classnames';


class LayoutGrid extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    cellsLoop = (cells, key=0) => {
        return cells.map((item, i) => {
            const {cell, cells, span, order, align, className, style} = item;
            const cellClassName = classnames("mdc-layout-grid__cell", {['mdc-layout-grid__cell--span-'+span]:span}, {['mdc-layout-grid__cell--order-'+order]:order}, {['mdc-layout-grid__cell--align-'+align]:align}, className);
            if(cells){
                return <div className={cellClassName} style={style} key={key+'-'+i}><div className="mdc-layout-grid__inner">{this.cellsLoop(cells, key+'-'+i)}</div></div>;
            }
            return <div className={cellClassName} style={style} key={key+'-'+i}>{cell}</div>;
        });
    };

    render(){
        const {cells, style, align, fixedColumnWidth} = this.props;
        const cellsComponent = this.cellsLoop(cells);
        return (
            <div className={classnames("mdc-layout-grid", {["mdc-layout-grid--align-"+align]:align}, {'mdc-layout-grid--fixed-column-width':fixedColumnWidth})} style={style}>
                <div className="mdc-layout-grid__inner">
                    {cellsComponent}
                </div>
            </div>
        )
    }
}

export default LayoutGrid;