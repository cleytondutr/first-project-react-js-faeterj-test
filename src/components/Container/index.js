import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
