/* eslint-disable react/jsx-no-target-blank */
import './style.scss';
import github from './image/github2.png'

const Card = ({id, titulo, imagem, linkGitHub, linkSite}) => {

  return(
    <div className="grid-item" key={id}>
      <h3 className="titulo"> {titulo} </h3>
      <div className="imagem">  <a target="_blank" href={linkSite}>  <img src={imagem} alt="imagem do site"/>  </a></div>
      <div className="github">  <a target="_blank" href={linkGitHub}> <img className="github" src={github} alt="" /> GitHub </a> </div>
    </div>
  )
}

export default Card;