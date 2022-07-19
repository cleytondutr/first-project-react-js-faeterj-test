import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff; /* Cor branca */
  font-size: 30px; /* tamanho bem grande */
  font-weight: bold; /* Negrito */
  display: flex; /* Cria um flex container a nível de bloco */
  justify-content: center; /* Alinha orizontalmente ao centro */
  align-items: center;
  height: 100vh; /* Altura total da tela */
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  /* Para ficar um item embaixo do outro (imagem, título e descrição) */
  align-items: center;
  /* Serão alinhados horizontalmente ao centro */

  img {
    width: 120px;
    /* Para a imagem da logo daremos uma largura de 120px */
    border-radius: 50%;
    /* Como nem todas as bordas são arredondadas, isto garante que todas sejam arredondaddas */
    margin-top: 20px;
    /* Como teremos um link para voltarmos para a página inicial acima da logo, definimos
       este espaço */
  }

  h1 {
    font-size: 24px;
    margin-top: 10px; /* Distância do nome do repositório para a logo */
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666; /* Para a descrição do repositório colocaremos um cinza mais claro */
    line-height: 1.4; /* Aumenta 40% do line-height tradicional */
    text-align: center;
    max-width: 400px; /* Largura máxima de 400px, desta forma ele fará uma quebra automática */
  }
`;
