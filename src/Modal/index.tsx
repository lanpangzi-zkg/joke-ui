import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dialog, { DialogProps } from './Dialog';

const Modal: React.FC<DialogProps> = (props) => ReactDOM.createPortal(<Dialog {...props} />, document.body);

export default Modal;
