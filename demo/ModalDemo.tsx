import * as React from 'react';
import Modal from '../src/Modal';

interface P {}
interface S {
    visible: boolean,
}

class ModalDemo extends React.Component<P, S> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.onToggleModal = this.onToggleModal.bind(this);
    }

    onToggleModal() {
        const { visible } = this.state;
        this.setState({
            visible: !visible,
        });
    }

    render() {
        const { visible } = this.state;
        return (
            <>
                <button onClick={this.onToggleModal}>show modal</button>
                <Modal
                    title="title"
                    visible={visible}
                    onClose={this.onToggleModal}
                >
                    this is content!!!
                </Modal>
            </>
        );
    }
}

export default ModalDemo;
