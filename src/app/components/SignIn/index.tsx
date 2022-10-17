/**
 *
 * SignIn
 *
 */
import React from 'react';
import { Modal } from '../Modal/Loadable';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SignIn(props: Props) {
  const onSubmit1 = () => {
    console.log('submit');
  };

  return (
    <Modal
      open={props.open}
      onSubmit={onSubmit1}
      title="Sign in"
      submitButtonText="Submit"
      onClose={props.onClose}
    >
      Body
    </Modal>
  );
}
