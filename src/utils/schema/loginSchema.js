import * as yup from 'yup'

export const SignInValidatorSchema = yup.object({
    email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O campo e-mail não pode ser vazio'),
    password: yup.string().required('O campo senha não pode ser vazio'),
})