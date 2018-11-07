/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/image-list.scss';
// import {MDCFloatingLabel} from '@material/floating-label';
import classnames from 'classnames';
import Icon from '../icon';

class ImageList extends React.Component{

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
        const {masonry, twolineCaption, data, withIconAlign, aspectRatio} = this.props;
        const content = data.map((item, i) => {
            const {imgSrc, label} = item;
            return (
                <li className="mdc-image-list__item">
                    {
                        masonry ?
                        <img className="mdc-image-list__image" src={imgSrc}/>
                        :
                        <div className="mdc-image-list__image-aspect-container">
                            <img className="mdc-image-list__image" src={imgSrc}/>
                        </div>
                    }
                    <div className="mdc-image-list__supporting">
                        <span className="mdc-image-list__label">{label}</span>
                    </div>
                </li>
            )
        });
        return (
            <ul className={classnames("mdc-image-list", {"my-image-list":!masonry}, {"mdc-image-list--masonry my-masonry-image-list":masonry})}>
                {content}
            </ul>
        )
    }
}

export default ImageList;