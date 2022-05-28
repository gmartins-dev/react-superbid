import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import {
  useForm,
  FormActions,
} from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (
      state.name === '' &&
      state.certificateType === null
    ) {
      navigate('/');
    } else
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
  }, []);

  const handleNextStep = () => {
    if (state.email != '' && state.phone != null) {
      navigate('/step4');
    } else {
      alert('Preencha todos os dados.');
    }
  };

  const handleEmailChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handlePhoneChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch({
      type: FormActions.setPhone,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Contato</h1>
        <p>Por favor preencha os seus dados de contato.</p>

        <label>
          Preencha seu <b>email</b>
          <input
            type="email"
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <hr />
        <label>
          Preencha seu <b>telefone</b> para contato.
          <input
            type="number"
            value={state.phone}
            onChange={handlePhoneChange}
          />
        </label>
        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Concluir</button>
      </C.Container>
    </Theme>
  );
};
