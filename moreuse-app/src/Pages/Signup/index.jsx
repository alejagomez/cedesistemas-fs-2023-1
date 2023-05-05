import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { Button } from '../../Components/Button';


const Signup = () => {

  return (
    <Page tittle="Registro">
      <FormContainer>
        <form>
          <FormControl>
            <label>Nombre</label>
            <input type='text' />
          </FormControl>
          <FormControl>
            <label>Correo electrónico</label>
            <input type='email' />
          </FormControl>
          <FormControl>
            <label>Dirección</label>
            <input type='text' />
          </FormControl>
          <FormControl>
            <label>Celular</label>
            <input type='text' />
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type='password' />
          </FormControl>
          <Button text="Registrarse" />
        </form>
      </FormContainer>
    </Page>
  )
}

export default Signup;
