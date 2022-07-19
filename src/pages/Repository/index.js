import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import { Owner } from './styles';

export default function Repository({ match }) {
  Repository.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const repoName = decodeURIComponent(match.params.repository);
    console.log(repoName);

    const [wrepository, wissues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    setRepository(wrepository.data);
    setIssues(wissues.data);
    setLoading(false);
  }, []);

  console.log(repository);
  console.log(issues);
  console.log(loading);

  return (
    <Container>
      <Owner>
        <Link to="/">Voltar aos repositórios</Link>
        {repository.owner ? (
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        ) : (
          <h1>Carregando...</h1>
        )}
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>
    </Container>
  );
}
