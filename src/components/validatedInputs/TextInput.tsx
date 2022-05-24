import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'

interface Props {
  name: string
  label?: string | undefined
  type?: React.HTMLInputTypeAttribute | undefined
  errorDescription?: string | undefined
  isTouched?: boolean | undefined
  isRequired?: boolean | undefined
  autoFocus?: boolean | undefined
  placeholder?: string | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
}

const TextInput = ({
  name,
  label,
  type,
  errorDescription,
  isTouched,
  isRequired,
  autoFocus,
  placeholder,
  onChange,
  onBlur,
}: Props): JSX.Element => {
  return (
    <FormControl
      isInvalid={Boolean(errorDescription) && isTouched}
      isRequired={isRequired}
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
      />
      <FormErrorMessage>{errorDescription}</FormErrorMessage>
    </FormControl>
  )
}

export default TextInput
