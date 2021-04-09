import Modal from 'react-modal';

// import { Container } from './styles';

interface NewTtansactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTtansactionModal({ isOpen, onRequestClose }: NewTtansactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}
