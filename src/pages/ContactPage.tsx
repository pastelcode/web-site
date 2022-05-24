import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'

import TextInput from '../components/validatedInputs/TextInput'

import { ourServices } from '../config/brandInformation'

const DataScheme = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Debe tener al menos 2 caracteres')
    .max(50, 'Debe ser de 50 caracteres como máximo')
    .required('Tu nombre es requerido'),
  email: yup
    .string()
    .email('Correo inválido')
    .required('Tu correo es requerido'),
})

interface FormValues {
  name: string
  email: string
  services: string[]
}

const ContactPage = (): JSX.Element => {
  const initialFormValues: FormValues = {
    name: '',
    email: '',
    services: [],
  }

  return (
    <VStack>
      <Heading>Contacto</Heading>
      <Formik
        validationSchema={DataScheme}
        initialValues={initialFormValues}
        onSubmit={(values) => {
          console.table(values)
        }}
      >
        {({ errors, touched, isSubmitting, handleBlur, handleChange }) => {
          return (
            <Form>
              <Field name="name">
                {() => (
                  <TextInput
                    name="name"
                    label="Nombre"
                    isTouched={touched.name}
                    isRequired
                    errorDescription={errors.name}
                    placeholder="Alfredo González"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              </Field>
              <Field name="email">
                {() => (
                  <TextInput
                    name="email"
                    type="email"
                    label="Correo electrónico"
                    isTouched={touched.email}
                    isRequired
                    errorDescription={errors.email}
                    placeholder="alfredo@correo.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              </Field>
              <Field name="services" type="checkbox">
                {() => (
                  <FormControl as="fieldset">
                    <FormLabel as="legend">Servicios</FormLabel>
                    <CheckboxGroup>
                      <VStack alignItems="start">
                        {ourServices.map(({ title }) => (
                          <Checkbox
                            key={title}
                            id="services"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={title}
                          >
                            {title}
                          </Checkbox>
                        ))}
                      </VStack>
                    </CheckboxGroup>
                    <FormHelperText>
                      Selecciona los servicios que sean necesarios para los
                      requerimientos de tu proyecto
                    </FormHelperText>
                  </FormControl>
                )}
              </Field>
              <Button isLoading={isSubmitting} type="submit">
                Enviar
              </Button>
            </Form>
          )
        }}
      </Formik>
    </VStack>
  )
}

export default ContactPage
