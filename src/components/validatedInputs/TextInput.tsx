import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'

interface Props {
  name: string
  type?: React.HTMLInputTypeAttribute | undefined
  errorDescription?: string | undefined
  isTouched?: boolean | undefined
  placeholder?: string | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
}

const TextInput = ({
  name,
  type,
  errorDescription,
  isTouched,
  placeholder,
  onChange,
  onBlur,
}: Props): JSX.Element => {
  return (
    <FormControl isInvalid={Boolean(errorDescription) && isTouched}>
      <FormLabel htmlFor={name}>Nombre</FormLabel>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormErrorMessage>{errorDescription}</FormErrorMessage>
    </FormControl>
  )
}

export default TextInput
