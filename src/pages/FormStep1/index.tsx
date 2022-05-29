import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import {
  useForm,
  FormActions,
} from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (
      state.name != '' &&
      state.certificateType != undefined
    ) {
      navigate('/step2');
    } else {
      alert('Preencha todos os dados.');
    }
  };

  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  const handleCertificateTypeChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch({
      type: FormActions.setCertificateType,
      payload: e.target.value,
    });
  };

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
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <hr />
        <label>
          Seu <b>CPF</b> ou <b>CNJP</b> da empresa
          <input
            type="number"
            value={state.certificateType}
            onChange={handleCertificateTypeChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
