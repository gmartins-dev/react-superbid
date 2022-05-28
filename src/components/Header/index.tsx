import * as C from './styles';

export const Header = () => {
  return (
    <C.Container>
      <img
        src="/public/imgs/logo_sbmarketplace.png"
        width="200px"
        alt="imagem ilustrando um aperto de mãos"
      />
      <h1>Cadastro de Vendedores</h1>
      <p>
        Faça seu cadastro em nossa plataforma de vendas.
      </p>
    </C.Container>
  );
};
