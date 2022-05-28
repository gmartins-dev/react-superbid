import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import * as C from './styles';
import {
  useForm,
  FormActions,
} from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.personType != 0) {
      navigate('/step3');
    } else {
      alert('Preencha todos os dados.');
    }
  };

  const setPersonType = (personType: number) => {
    dispatch({
      type: FormActions.setPersonType,
      payload: personType,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>
          Deseja se cadastrar como pessoa física ou
          jurídica?
        </h1>
        <hr />
        <SelectOption
          title="Sou Pessoa Física (PF)"
          description="Se você for PF escolha essa opção."
          icon="👤"
          selected={state.personType === 0}
          onClick={() => setPersonType(0)}
        />
        <SelectOption
          title="Sou Pessoa Jurídica (PJ)"
          description="Se você for PF escolha essa opção."
          icon="🏢"
          selected={state.personType === 1}
          onClick={() => setPersonType(1)}
        />

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
