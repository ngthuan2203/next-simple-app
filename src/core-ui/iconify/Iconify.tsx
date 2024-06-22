import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box, BoxProps, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

//
import { IconifyProps } from './types';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  icon?: IconifyProps;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
}

const Iconify = forwardRef<SVGElement, Props>(({ icon, width = 20, sx, ...other }, ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

export default Iconify;
