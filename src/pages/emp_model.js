import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function EmpModel(props){
    let data = props.values;
   
    return (
        <Modal show={data.modalShow} onHide={data.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>{data?.selectedEmployee?.Eid}</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
    );
}
export default EmpModel;