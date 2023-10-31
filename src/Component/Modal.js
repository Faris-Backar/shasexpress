import React from 'react';
import styled from 'styled-components';

export default function Modal({ showModal, setShowModal }) {
  if (!showModal) {
    return null;
  }

const onClose=()=>{
    setShowModal(false);
}
  return (
    <ModalBackground>
      <ModalContent>
        <h2>tfvsdc</h2>
        <p>vfds</p>
        <Button onClick={onClose}>Close</Button>
      </ModalContent>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  /* Styling for the modal background... */
`;

const ModalContent = styled.div`
  /* Styling for the modal content... */
`;

const Button = styled.button`
  /* Styling for the close button... */
`;
