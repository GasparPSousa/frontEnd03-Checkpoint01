import Card from '../Card';
import { Component } from 'react';
import './style.scss';
import carrosDeLuxoMobile from '../Projetos/image/carrosDeLuxoMobile.png';
import toDoListMobile from '../Projetos/image/toDoListMobile.png';
import olimpifyMobile from '../Projetos/image/olimpifyMobile.png';
import valorantMobile from '../Projetos/image/valorantMobile.png';

export default class Projetos extends Component {

  constructor() {
    super();
    this.state = {listaDeProjetos: [
      {
        titulo: 'Carros de Luxo',
        imagem: carrosDeLuxoMobile,
        linkGitHub: 'https://github.com/GasparPSousa/carrosDeLuxo',
        linkSite: 'https://gasparpsousa.github.io/carrosDeLuxo/',
        id: 1
      },
      {
        titulo: 'ToDo List',
        imagem: toDoListMobile,
        linkGitHub: 'https://github.com/GasparPSousa/frontEnd02-Checkpoint02',
        linkSite: 'https://gasparpsousa.github.io/frontEnd02-Checkpoint02/',
        id: 2
      },
      {
        titulo: 'Olimpify',
        imagem: olimpifyMobile,
        linkGitHub: 'https://github.com/Larissa-Nunes/olimpify',
        linkSite: 'https://larissa-nunes.github.io/olimpify/',
        id:3
      },
      {
        titulo: 'Valorant',
        imagem: valorantMobile,
        linkGitHub: 'https://github.com/GasparPSousa/frontEnd-aula06',
        linkSite: 'https://front-end-aula06-gaspar.vercel.app/',
        id:4
      },

    ]};
  }

  
render () {
  return(
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="grid">
        {this.state.listaDeProjetos.map(({id, titulo, imagem, linkGitHub, linkSite}) => {
          return (
            <Card key={id} titulo={titulo} imagem={imagem} linkGitHub={linkGitHub} linkSite={linkSite}  />
          )
        })}
      </div>
    </section>
  )
}

}
