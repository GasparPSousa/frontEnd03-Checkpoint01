/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

const Header = () => {

  return(
    <>
      <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">GASPAR</a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarsExample01" >
            <ul class="navbar-nav me-auto mb-2">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Banner</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Projetos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Footer</a>
              </li>        
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header;