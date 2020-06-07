// when we import a file that was created by us is necessary to inform the file path
import api from './api';

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.querySelector('#app form');
    this.inputEl = document.querySelector('#app input[name=repository]');
    this.listEl = document.querySelector('#app ul');
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;
    if (repoInput.length === 0)
      return;

    try {
      this.setLoading();
      const response = await api.get(`/repos/${repoInput}`);
      this.setLoading(false);
      
      // using desestructuring
      const { name, description, html_url, owner: { avatar_url } } = response.data;

      // using object short syntax
      this.repositories.push({
        name,
        description,
        html_url,
        avatar_url
      });
      
      this.inputEl.value = '';
      this.render();
    } catch (err) {
      alert('Repository not found.')
    };

    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = '';
    this.repositories.forEach(repo => {

      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Access'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    })
  }

  setLoading(loading = true) {
    if (!loading) {
      document.getElementById('loading').remove();
      return;
    }
    let loadingEl = document.createElement('span');
    loadingEl.appendChild(document.createTextNode('Loading...'));
    loadingEl.setAttribute('id', 'loading');
    this.formEl.appendChild(loadingEl);
  }
}



new App();