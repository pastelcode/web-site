import { Button, Heading, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'

import TextInput from '../components/validatedInputs/TextInput'

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

const ContactPage = (): JSX.Element => {
  return (
    <VStack>
      <Heading>Contacto</Heading>
      <Formik
        validationSchema={DataScheme}
        initialValues={{ name: '', email: '' }}
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
                    isTouched={touched.name}
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
                    isTouched={touched.email}
                    errorDescription={errors.email}
                    placeholder="alfredo@correo.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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
