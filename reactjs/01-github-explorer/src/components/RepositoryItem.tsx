import React from 'react';
import { IRepository } from './RepositoryList';

interface RepositoryItemProps {
  repository: IRepository
}

const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
