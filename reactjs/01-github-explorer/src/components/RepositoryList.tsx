import RepositoryItem from './RepositoryItem'
import { useState, useEffect } from 'react'
import '../styles/repositories.scss'

function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((res) => res.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map((repository: any) => 
            <RepositoryItem key={repository.id} repository={repository}/>
          )
        }
      </ul>
    </section>
  );
}

export default RepositoryList;