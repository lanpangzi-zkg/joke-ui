import * as React from 'react';
import './dialog.less';

export interface DialogProps {
    title?: React.ReactNode;
    visible: boolean;
    onClose?: () => void;
}

const Dialog: React.FC<DialogProps> = (props) => {
    const {
        visible, title, onClose, children,
    } = props;
    if (visible) {
        return (
            <div className="ant-modal-root">
                <div className="ant-modal-mask" />
                <div className="ant-modal-wrap ">
                    <div className="ant-modal">
                        <div className="ant-modal-content">
                            <div className="ant-modal-header">{title}</div>
                            <div className="ant-modal-body">{children}</div>
                            <div className="ant-modal-footer">
                                <button className="ant-btn ant-btn-primary" onClick={onClose}>
                                    确定
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default Dialog;
