import { JSXElementConstructor, ReactElement } from 'react';
import { DialogProps } from '@mui/material';

export interface ModalProps extends DialogProps {
  width?: string | number;
  height?: string | number;
  onClose?: VoidFunction;
  styleContent?: string;
}

export interface ModalBooleanProps {
  label?: string;
  open: boolean;
  active: boolean;
  onAgree?: VoidFunction;
  onClose?: VoidFunction;
  onChange: (value: boolean) => void;
}

export interface ModalDatePickedProps {
  label?: string;
  open: boolean;
  value?: Date | null;
  onChange: (value: Date | null) => void;
  onClose?: VoidFunction;
  onAgree?: VoidFunction;
}

export interface ModalTitleProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
