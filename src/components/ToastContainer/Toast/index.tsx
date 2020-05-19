import React from 'react';
import {
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';

import { Container } from './styles';

interface ToastProps {
  type: 'info' | 'success' | 'error';
  title: string;
  description?: string;
  onClose(): void;
}

const iconType = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ type, title, description, onClose }) => {
  return (
    <Container type={type}>
      {iconType[type]}
      <div>
        <strong>{title}</strong>
        {!!description && <span>{description}</span>}
      </div>
      <button type="button" onClick={() => onClose()}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
