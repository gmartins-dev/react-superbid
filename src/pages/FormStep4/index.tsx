import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import * as C from './styles';

export const FormStep4 = () => {
  const { state, dispatch } = useForm();

  return (
    <Theme>
      <C.Container>
        <img
          src="imgs/maos.png"
          width="200px"
          alt="imagem ilustrando um aperto de mãos"
        />
        <br />
        <img
          src="imgs/logo_superbid.png"
          width="200px"
          alt="logomarca da empresa superbid"
        />

        <h1>
          {state.name},<br /> seu cadastro foi concluido com
          sucesso!
        </h1>
        <p>Seja bem vindo a nossa plataforma.</p>
        <p>Boas vendas!</p>
      </C.Container>
    </Theme>
  );
};
