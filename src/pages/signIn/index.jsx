import { FormContainer, FormDataContainer, ImageContainer, InputContainer, LoginContainer, TextsContainer } from "./style"
import { RegularText, TitleTextRegular } from "../../styles/typograph";
import { InputForm } from "../../components/input";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInValidatorSchema } from '../../utils/schema/loginSchema'
import { ButtonForm } from '../../components/ButtonForm'
import SchoolarBrand from '../../assets/schoolar-brand.svg'
import { BackButton } from '../../components/backButton'
import ArrowBack from '../../assets/arrow-back.svg'
import { Navigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext'
import { PulseLoader } from "react-spinners";

const formData = [
    {
        labelText: 'E-mail',
        placeholder: 'Digite seu e-mail',
        inputType: 'email',
        name: 'email',
    },
    {
        labelText: 'Senha',
        placeholder: 'Digite sua senha',
        inputType: 'password',
        name: 'password',
    },
]

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(SignInValidatorSchema),
    })

    const { signIn, signed, isLoading, user } = useContext(AuthContext)

    async function handleLogin(inputData) {
        console.log(inputData)
        await signIn(inputData)
    }

    if (signed) {
        if (user.type === 'STUDENT') return <Navigate to="/home" />
        if (user.type === 'PROFESSOR') return <Navigate to="/home" />
    } else {
        return (
            <LoginContainer>
                <ImageContainer>
                    <BackButton
                        path="/"
                        weight="500"
                        width="60px"
                        backgroundcolor="brand-blue"
                        hovercolor="base-background"
                        hoverbackgroundcolor="base-button-hover"
                        textcolor="base-white"
                    >
                        {ArrowBack}
                    </BackButton>

                    <img src={SchoolarBrand} alt="schoolar-brand" />
                </ImageContainer>

                <FormContainer>
                    <TextsContainer>
                        <TitleTextRegular color="base-title" weight="500" fontSize="title-l">
                            Login
                        </TitleTextRegular>
                        <RegularText color="base-text-lighter" weight="400" fontSize="text-ms">
                            Olá, bem vindo de volta
                        </RegularText>
                    </TextsContainer>

                    <FormDataContainer onSubmit={handleSubmit(handleLogin)} noValidate>
                        <InputContainer>
                            {formData.map((item, index) => {
                                return (
                                    <InputForm
                                        key={index}
                                        error={errors[item.name]}
                                        labelText={item.labelText}
                                        placeholder={item.placeholder}
                                        typeInput={item.inputType}
                                        {...register(item.name)}
                                    />
                                )
                            })}
                        </InputContainer>
                        <ButtonForm
                            type="submit"
                            backgroundColor="brand-blue"
                            textColor="base-white"
                            hoverBackgroundColor="base-button-hover"
                        >
                            {isLoading ? (
                                <PulseLoader color="#FFF" size={14} />
                            ) : (
                                'Login'
                            )}
                        </ButtonForm>
                    </FormDataContainer>

                </FormContainer>
            </LoginContainer>
        )
    }


}