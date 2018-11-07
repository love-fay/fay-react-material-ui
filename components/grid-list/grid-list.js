/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/grid-list.scss';
// import {MDCFloatingLabel} from '@material/floating-label';
import classnames from 'classnames';
import Icon from '../icon';

class GridList extends React.Component{

    constructor(props) {
        super(props);
        // this.labelRef = React.createRef();
    }

    componentDidMount(){
        // this.checkbox = MDCFloatingLabel.attachTo(this.labelRef.current);
        // if(this.props.value) checkbox.value = this.props.value;
        // console.log(checkbox.value);
    }

    componentDidUpdate(){
        // if(this.props.checked) this.checkbox.checked = true;
        // if(this.props.disabled) this.checkbox.disabled = true;
        // if(this.props.indeterminate) this.checkbox.indeterminate = true;
    }

    render(){
        const {headerCaption, twolineCaption, data, withIconAlign, aspectRatio} = this.props;
        const content = data.map((item, i) => {
            const {imgSrc, title, supportText, iconType} = item;
            return (
                <li className="mdc-grid-tile">
                    <div className="mdc-grid-tile__primary">
                        {
                            imgSrc ?
                            <img className="mdc-grid-tile__primary-content" src={imgSrc}/>
                            :
                            <div className="mdc-grid-tile__primary-content"/>
                        }
                    </div>
                    {
                        title &&
                        <span className="mdc-grid-tile__secondary">
                            {withIconAlign && iconType && <Icon className="mdc-grid-tile__icon" type={iconType}/>}
                            <span className="mdc-grid-tile__title">{title}</span>
                            {twolineCaption && supportText && <span className="mdc-grid-tile__support-text">{supportText}</span>}
                        </span>
                    }
                </li>
            )
        });
        return (
            <div className={classnames("mdc-grid-list", {['mdc-grid-list--tile-aspect-'+aspectRatio]:aspectRatio}, {"mdc-grid-list--header-caption": headerCaption}, {"mdc-grid-list--twoline-caption": twolineCaption}, {["mdc-grid-list--with-icon-align-"+withIconAlign]: withIconAlign})}>
                <ul className="mdc-grid-list__tiles">
                    {content}
                </ul>
            </div>
        )
    }
}

export default GridList;