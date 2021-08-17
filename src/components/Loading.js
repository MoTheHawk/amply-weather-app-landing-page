import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

function Loading() {
    return (
        <Modal id="modal_loading" show={true} fullscreen={true} animation={false}>
            <Modal.Body>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Modal.Body>
        </Modal>
    );
}

export default Loading;
