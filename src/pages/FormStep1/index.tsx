import * as C from './styles';
import { Theme } from '../../components/Theme';

export const FormStep1 = () => {
  const handleNextStep = () => {};

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Quem é você?</h1>
        <p>
          Por favor preencha o seu nome completo ou da sua
          empresa abaixo:
        </p>

        <label>
          Seu nome completo ou da empresa
          <input type="text" autoFocus />
        </label>
        <hr />
        <p>
          Por favor preencha o seu CPF ou CNJP da sua
          empresa abaixo:
        </p>
        <label>
          Seu CPF ou CNJP da empresa
          <input type="number" autoFocus />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
