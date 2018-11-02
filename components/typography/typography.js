import React from 'react';
import './style/index.scss';

class Typography extends React.Component{

    render(){
        const {children, type} = this.props;
        return (
            <div className="mdc-typography">
                {type === 'h1' && <h1 className="mdc-typography--headline1">{children}</h1>}
                {type === 'h2' && <h2 className="mdc-typography--headline2">{children}</h2>}
                {type === 'h3' && <h3 className="mdc-typography--headline3">{children}</h3>}
                {type === 'h4' && <h4 className="mdc-typography--headline4">{children}</h4>}
                {type === 'h5' && <h5 className="mdc-typography--headline5">{children}</h5>}
                {type === 'h6' && <h6 className="mdc-typography--headline6">{children}</h6>}
                {type === 'subtitle1' && <h6 className="mdc-typography--subtitle1">{children}</h6>}
                {type === 'subtitle2' && <h6 className="mdc-typography--subtitle2">{children}</h6>}
                {type === 'body1' && <p className="mdc-typography--body1">{children}</p>}
                {type === 'body2' && <p className="mdc-typography--body2">{children}</p>}
                {type === 'caption' && <div className="mdc-typography--caption">{children}</div>}
                {type === 'button' && <div className="mdc-typography--button">{children}</div>}
                {type === 'overline' && <div className="mdc-typography--overline">{children}</div>}
            </div>
        )
    }
}

export default Typography;