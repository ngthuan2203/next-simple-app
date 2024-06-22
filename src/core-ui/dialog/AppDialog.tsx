import { Dialog, DialogContent, DialogTitle, IconButton, SxProps, Theme, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Iconify from '../iconify/Iconify';

import { ModalProps } from './types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  padding: 2,
  paddingTop: 0,
  maxHeight: '90vh',
  overflowY: 'hidden',
  minWidth: '148px',
  minHeight: '100px'
};

const styleCloseButton: SxProps<Theme> = {
  position: 'absolute',
  top: 4,
  right: -8,
  zIndex: 100
};

export default function AppDialog({
  open,
  width,
  height,
  children,
  onClose,
  styleContent,
  title,
  ...other
}: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      
    >
      <DialogTitle alignContent={'center'}>
        <Typography variant="h3" align="center" color='primary'>{title}</Typography>
        </DialogTitle>
      <DialogContent>
          {children}
      </DialogContent>
    </Dialog>
  );
}
