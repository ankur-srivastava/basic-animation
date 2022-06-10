import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const backdropStyle = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed']
    return <div className={backdropStyle.join(' ')}></div>
}

export default backdrop
