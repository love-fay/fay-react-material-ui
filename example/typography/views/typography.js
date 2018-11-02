import React from 'react';
import Typography from '../../../components/typography';

class Demo extends React.Component{

    render(){
        return (
            <div>
                <Typography type='h1'>headline1</Typography>
                <Typography type='h2'>headline2</Typography>
                <Typography type='h3'>headline3</Typography>
                <Typography type='h4'>headline4</Typography>
                <Typography type='h5'>headline5</Typography>
                <Typography type='h6'>headline6</Typography>
                <Typography type='subtitle1'>subtitle1</Typography>
                <Typography type='subtitle2'>subtitle2</Typography>
                <Typography type='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                <Typography type='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                <Typography type='caption'>caption</Typography>
                <Typography type='button'>button</Typography>
                <Typography type='overline'>overline</Typography>
            </div>
        )
    }
}

export default Demo;