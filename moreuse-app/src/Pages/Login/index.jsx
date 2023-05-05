import { Page } from '../../Components/Page';
import { Button } from '../../Components/Button';
import { FormContainer, FormControl } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { SignupContent } from './styles';
import { useForm } from 'react-hook-form';
import { emailExpRegular } from '../../Constants';


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitLogin = (data) => {
    console.log('data', data);
  }

  return (
    <Page tittle="Ingresar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <FormControl>
            <label>Correo Electrónico</label>
            <input type='email' {...register("emailAddress",
              { required: true, pattern: emailExpRegular }
            )} />
            {errors.emailAddress?.type === 'required' && <span>Campo requerido</span>}
            {errors.emailAddress?.type === 'pattern' && <span>Debes ingresar un correo válido</span>}
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type='password' {...register("password", { required: true, minLength: 8 })} />
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 8 caracteres</span>}
          </FormControl>
          <Button type="submit" text="Ingresar" />
        </form>
      </FormContainer>
      <SignupContent>
        <p>¿Aún no tienes una cuenta?
          <Link to="signup"> Registrarme</Link>
        </p>
      </SignupContent>
    </Page>
  )
}

export default Login;
