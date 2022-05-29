import { useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { ReactComponent as PfIcon } from '../../svgs/icon-pf.svg';
import { ReactComponent as PjIcon } from '../../svgs/icon-pj.svg';
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
    if (
      state.name === '' &&
      state.certificateType === undefined
    ) {
      navigate('/');
    } else
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
  }, []);

  const handleNextStep = () => {
    if (state.personType != undefined) {
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
          <i>{state.name}</i>, deseja se cadastrar como
          Pessoa Física ou Jurídica?
        </h1>
        <hr />
        <SelectOption
          title="Sou Pessoa Física (PF)"
          description="Se você for PF escolha essa opção."
          icon={
            <PfIcon fill="white" width={35} height={35} />
          }
          selected={state.personType === 0}
          onClick={() => setPersonType(0)}
        />
        <SelectOption
          title="Sou Pessoa Jurídica (PJ)"
          description="Caso seja PF escolha essa opção."
          icon={
            <PjIcon fill="white" width={30} height={30} />
          }
          selected={state.personType === 1}
          onClick={() => setPersonType(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
