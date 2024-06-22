// form
import { Controller, useFormContext } from 'react-hook-form';
// @mui
import { FormHelperText, TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  size?: 'small' | 'medium';
};

export default function RHFTextField({ name, helperText, size, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          size={size || 'small'}
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={
            <FormHelperText
              error={!!error}
              component='span'
              sx={{
                mx: 0,
                mt: 0,
                fontStyle: error?.message ? 'normal' : 'italic'
              }}
            >
              {error ? error?.message : helperText}
            </FormHelperText>
          }
          sx={{
            '& textarea:focus': {
              border: 'none'
            }
          }}
          {...other}
          inputProps={{
            role: `role-${name}`
          }}
        />
      )}
    />
  );
}
