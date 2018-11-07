import React from 'react';
import './style/slider.scss';
import Icon from '../icon';
import classnames from 'classnames';
import {MDCSlider} from '@material/slider';

class Slider extends React.Component{

    constructor(props){
        super(props);
        this.sliderRef = React.createRef();
    }

    componentDidMount(){
        const slider = MDCSlider.attachTo(this.sliderRef.current);
    }

    render(){
        const {discrete, displayMarkers, label, htmlFor, ...props} = this.props;
        return (
            <div className={classnames("mdc-slider", {'mdc-slider--discrete': displayMarkers || discrete}, {'mdc-slider--display-markers':displayMarkers})} tabIndex="0" role="slider"
                 aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
                 aria-label="Select Value" ref={this.sliderRef}>
                <div className="mdc-slider__track-container">
                    <div className="mdc-slider__track"/>
                    {displayMarkers && <div className="mdc-slider__track-marker-container"/>}
                </div>
                <div className="mdc-slider__thumb-container">
                    {
                        (displayMarkers || discrete) &&
                        <div className="mdc-slider__pin">
                            <span className="mdc-slider__pin-value-marker"/>
                        </div>
                    }
                    <svg className="mdc-slider__thumb" width="21" height="21">
                        <circle cx="10.5" cy="10.5" r="7.875"/>
                    </svg>
                    <div className="mdc-slider__focus-ring"/>
                </div>
            </div>
        )
    }
}

export default Slider;