import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px; /* largura máxima de 700px */
  background: #fff; /* background de cor branca */
  border-radius: 4px; /* borda arredondada */
  /* efeitos de sombra em volta de um elemento 0 0 saindo do eixo x e y com 20px */
  /* e uma cor preta com opacidade mais baixa de 10% */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px; /* espaçamento interno */
  margin: 80px auto; /* margem superior e inferior de 80px, e auto nas laterais */
  /* ficando dessa forma sempre centralizado (no meio da tela) */

  h1 {
    /* Onde está escrito os Repositórios */
    font-size: 20px; /* tamanho da fonte */
    display: flex; /* se ele não houver largura definida ocupará 100% da largura do pai */
    flex-direction: row; /* eixo principal será o mesmo que a direção do texto. */
    align-items: center; /* texto centralizado */
    /* Esta parte do flex é importante para que o ícone e o texto fiquem centralizados */
    /* venticalmente possuindo sempre a mesma centralização. */
    svg {
      /* svg para o ícone, com margem direita de 10px para distanciar o texto do ícone */
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  /* Com as 3 propriedades abaixo garantimos que o input e o botão sempre fiquem */
  /* um ao lado do outro, e não um embaixo do outro independentemente do tamanho. */
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1; /* faz que o input ocupe todo o espaço possível */
    border: 1px solid #eee; /* refere-se a uma cor cinza bem fraquinho */
    padding: 10px 15px; /* Espaçamento superior/inferior 10px e nas laterais 15px  */
    border-radius: 4px; /* Borda arredondada */
    font-size: 16px; /* Tamanho da fonte */
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #44475a; /* Cor referente ao tema drácula */
  border: 0; /* Sem borda */
  padding: 0 15px; /* Espaçamento superior/inferior 0px e nas laterais 15px  */
  margin-left: 10px; /* Margem esquerda */
  border-radius: 4px; /* Borda arredondada */
  /* Para garantir que o conteúdo do botão sempre esteja alinhado ao centro */
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed; /* O cursor não permite que cliquemos nele */
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  svg {
    margin: 0px !important;
  }
`;

export const List = styled.ul`
  list-style: none; /* Retira as bolinhas que ficam no início de uma lista */
  margin-top: 30px;

  /* Para cada linha o estilo será o seguinte */
  li {
    padding: 15px 0; /* Espaçamento acima e abaixo de 15px  */
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Título repositório à esquerda e detalhes à esquerda */
    align-items: center; /* Força o alinhamento vertical do título e do detalhes */

    /* o & indica que pegaremos todos os li, e depois os li seguidos por um li anterior */
    /* ou seja, aplica a estilização em todos os li, exceto o primeiro. */
    & + li {
      border-top: 1px solid #eee; /* Borda cinza entre cada item (repositório digitado) */
    }
    /* O a representa os "detalhes" */
    a {
      color: #44475a;
      text-decoration: none; /* retira o undeline */
    }
  }
`;
