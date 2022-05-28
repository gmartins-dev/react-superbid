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
    if (state.name != '' && state.certificateType != null) {
      navigate('/step2');
    } else {
      alert('Preencha todos os dados.');
    }
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
        />
        <SelectOption
          title="Sou Pessoa Jurídica (PJ)"
          description="Se você for PF escolha essa opção."
          icon="🏢"
        />

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
