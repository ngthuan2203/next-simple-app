// form
import { useFormContext } from 'react-hook-form';
import { Box, SxProps, Theme, Typography } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  label?: string;
  require?: boolean;

  /**
   * show selected number for multile select
   */
  name?: string;
  showSelected?: boolean;
  extendLabel?: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function FormControl({ showSelected, children, label, require, name, extendLabel, sx }: Props) {
  const { watch } = useFormContext();

  return (
    <Box sx={sx}>
      <Typography
        component="span"
        sx={{
          color: 'text.secondary',
          fontWeight: 700,
          fontSize: '14px',
          height: 20
        }}
      >
        {label}{' '}
        {name && showSelected && watch(name)?.length > 0 && (
          <Typography
            display="inline-block"
            component="span"
            sx={{
              color: 'error.main'
            }}
          >
            ({watch(name)?.length}){' '}
          </Typography>
        )}
        {require && (
          <Typography
            display="inline-block"
            component="span"
            sx={{
              color: 'error.main'
            }}
          >
            *
          </Typography>
        )}
        {extendLabel}
      </Typography>
      <Box mt={0.5}>{children}</Box>
    </Box>
  );
}
