import { Page } from '../../Components/Page';
import { Content, FormContainer } from '../../globalStyles';

const Profile = () => {

  return (
    <Page tittle="Perfil">
      <Content>
        <h4>Nombre</h4>
        <p>Pepito</p>
        <h4>Correo electrónico</h4>
        <p>pepito@gmail.com</p>
        <h4>Direccion</h4>
        <p>Calle 77</p>
        <h4>Telefono</h4>
        <p>111111</p>
      </Content>
    </Page>
  )
}

export default Profile;
