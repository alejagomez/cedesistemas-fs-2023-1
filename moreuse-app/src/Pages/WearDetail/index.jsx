import { Page } from '../../Components/Page'
import { Button } from '../../Components/Button';
import { WearDetailContainer, WearImageContainer, WearDetailContent } from './styles';
import { useParams } from 'react-router-dom';

const WearDetail = () => {

  const { id } = useParams();

  return (
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src="https://hmcolombia.vtexassets.com/arquivos/ids/1833172-483-725/Camisa-le%C3%B1adora-de-algodon---Red-Checked---H-M-CO.jpg?v=637928777918300000" />
        </WearImageContainer>
        <WearDetailContent>
          <h5>Referencia:{id}</h5>
          <h3>Camisa Leñadora</h3>
          <h4>2 meses / Masculino</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex placeat debitis blanditiis non saepe animi aliquam earum odit aspernatur itaque omnis tempora exercitationem, dicta qui consequatur? Eos velit blanditiis minima.</p>
        </WearDetailContent>
      </WearDetailContainer>
      <Button text="Comprar" />
    </Page>
  )
}

export default WearDetail;


