import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function SocialSignButtons({ disabled, onFbClick, onGoogleClick, type }) {
  const [userType, setUserType] = useState('client');
  const [selectedButton, setSelectedButton] = useState(null);

  const submitModal = () => {
    if (selectedButton === 'fb') onFbClick(userType);
    else onGoogleClick(userType);
    setSelectedButton(null); //Cerramos modal
  };

  return (
    <>
      <Row>
        <Col md="6">
          <Button
            block
            color="facebook"
            size="lg"
            onClick={type === 'register' ? () => setSelectedButton('fb') : onFbClick}
            disabled={disabled}
          >
            <span className="btn-inner--icon mr-2">
              <FontAwesomeIcon icon={['fab', 'facebook']} size="1x" />
            </span>
            <span className="btn-inner--text">Facebook</span>
          </Button>
        </Col>
        <Col md="6">
          <Button
            block
            onClick={type === 'register' ? () => setSelectedButton('google') : onGoogleClick}
            className="text-white mt-4 mt-md-0"
            size="lg"
            style={{
              background: '#4285f4',
            }}
            disabled={disabled}
          >
            <span className="btn-inner--icon mr-2">
              <FontAwesomeIcon icon={['fab', 'google']} size="1x" />
            </span>
            <span className="btn-inner--text">Google</span>
          </Button>
        </Col>
      </Row>
      <Modal isOpen={!!selectedButton}>
        <ModalHeader toggle={() => setSelectedButton(null)}>¿En qué categoría estás?</ModalHeader>
        <ModalBody>
          <Row className="justify-content-center align-items-center">
            <Col xs="4">
              <div className="custom-control custom-radio my-3">
                <input
                  className="custom-control-input"
                  id="client2"
                  name="userType2"
                  type="radio"
                  defaultChecked
                  value="client"
                  onChange={() => setUserType('client')}
                />
                <label className="custom-control-label" htmlFor="client2">
                  Soy Cliente
                </label>
              </div>
            </Col>
            <Col xs="4">
              <div className="custom-control custom-radio my-3">
                <input
                  className="custom-control-input"
                  id="professional2"
                  name="userType2"
                  type="radio"
                  value="professional"
                  onChange={() => setUserType('professional')}
                />
                <label className="custom-control-label" htmlFor="professional2">
                  Soy Profesional
                </label>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitModal}>
            Continuar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
