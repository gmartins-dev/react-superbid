import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem/index';
import { useForm } from '../../contexts/FormContext';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title=""
              description=""
              icon=""
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title=""
              description=""
              icon=""
              path="/step2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title=""
              description=""
              icon=""
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
