/**
 *
 * Modal
 *
 */
import React from 'react';
import { Button, Modal as ModalWrapper } from 'antd';

interface Props {
  title: string;
  submitButtonText: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export function Modal(props: Props) {
  return (
    <ModalWrapper
      open={props.open}
      title={props.title}
      onCancel={props.onClose}
      onOk={props.onSubmit}
      footer={[
        <Button type="primary" key="submit" onClick={props.onSubmit}>
          {props.submitButtonText}
        </Button>,
      ]}
    >
      {props.children}
    </ModalWrapper>
  );
}
