// Form information is being sent to Netlify's forms service

import { useSearchParams } from 'react-router-dom'
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Textarea,
  Tooltip,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'

import TextInput from '../components/validatedInputs/TextInput'

import { ourServices } from '../config/brandInformation'
import { errorToast, successToast } from '../components/contact/statusToasts'

const ContactPage = (): JSX.Element => {
  const encode = (data: FormValues) => {
    return Object.keys(data)
      .map(
        (key: keyof FormValues) =>
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(data[key].toString())
      )
      .join('&')
  }

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
    [k: string]: string | string[]
    name: string
    email: string
    services: string[]
    message: string
  }

  const toast = useToast()

  const [search] = useSearchParams()
  const defaultCheckboxesValue: string | null = search.get('servicio')

  const initialFormValues: FormValues = {
    name: '',
    email: '',
    services: defaultCheckboxesValue ? [defaultCheckboxesValue] : [],
    message: '',
  }

  const handleSubmit = async (
    data: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ): Promise<void> => {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        subject: 'Cotización de servicios informáticos',
        ...data,
      }),
    })

    setSubmitting(false)

    toast.closeAll()
    if (response.ok) {
      resetForm()
      toast(successToast)
    } else {
      toast(errorToast)
    }
  }

  return (
    <VStack>
      <Image
        src="/layered-waves-up.svg"
        alt="Waves illustration"
        height={20}
        width="100%"
        objectFit="cover"
        objectPosition="bottom"
      />
      <Heading>Contacto</Heading>
      <Box width="90%" maxWidth="500px">
        <Formik
          validationSchema={DataScheme}
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            isSubmitting,
            handleBlur,
            handleChange,
            values,
          }) => {
            return (
              <Form name="contact" data-netlify="true">
                <VStack spacing={7}>
                  <Field name="name">
                    {() => (
                      <TextInput
                        name="name"
                        value={values.name}
                        label="Nombre"
                        isTouched={touched.name}
                        isRequired
                        autoFocus
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
                        value={values.email}
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
                        <CheckboxGroup
                          defaultValue={[defaultCheckboxesValue ?? '']}
                        >
                          <VStack alignItems="start">
                            {ourServices.map(({ title, isComingSoon }) => (
                              <Tooltip
                                label="Este servicio no está disponible actualmente"
                                isDisabled={!isComingSoon}
                                shouldWrapChildren
                                hasArrow
                              >
                                <Checkbox
                                  key={title}
                                  id="services"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={title}
                                  isDisabled={isComingSoon}
                                >
                                  {title}
                                </Checkbox>
                              </Tooltip>
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
                  <Field name="message" type="textarea">
                    {() => (
                      <FormControl>
                        <FormLabel htmlFor="message">Mensaje</FormLabel>
                        <Textarea
                          id="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="El proyecto será lanzado al mercado el..."
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Button isLoading={isSubmitting} type="submit">
                    Enviar
                  </Button>
                </VStack>
              </Form>
            )
          }}
        </Formik>
      </Box>
      <Image
        src="/layered-waves-down.svg"
        alt="Waves illustration"
        height={20}
        width="100%"
        objectFit="cover"
        objectPosition="top"
      />
    </VStack>
  )
}

export default ContactPage
