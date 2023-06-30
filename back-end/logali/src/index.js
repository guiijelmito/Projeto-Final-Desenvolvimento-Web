import React, { useRef } from 'react';
import './styles/media-query-cadastro01.css';
import './styles/media-query-cadastro02.css';
import './styles/media-query-cadastro03.css';


const Formulario = () => {
  const inputEmailRef = useRef();
  const inputNomeRef = useRef();
  const inputUsernameRef = useRef();
  const inputSenhaRef = useRef();

  const linha1Ref = useRef();
  const linha2Ref = useRef();
  const linha3Ref = useRef();
  const linha4Ref = useRef();

  const handleFocus = (linha) => {
    linha.current.classList.add('linha_destaque');
  };

  const handleBlur = (linha) => {
    linha.current.classList.remove('linha_destaque');
  };

  return (
    <form>
      <div>
        <label htmlFor="iemail">Email:</label>
        <input
          id="iemail"
          ref={inputEmailRef}
          onFocus={() => handleFocus(linha1Ref)}
          onBlur={() => handleBlur(linha1Ref)}
        />
        <div id="linha01" ref={linha1Ref} />
      </div>
      <div>
        <label htmlFor="inome">Nome:</label>
        <input
          id="inome"
          ref={inputNomeRef}
          onFocus={() => handleFocus(linha2Ref)}
          onBlur={() => handleBlur(linha2Ref)}
        />
        <div id="linha02" ref={linha2Ref} />
      </div>
      <div>
        <label htmlFor="iusername">Nome de usuário:</label>
        <input
          id="iusername"
          ref={inputUsernameRef}
          onFocus={() => handleFocus(linha3Ref)}
          onBlur={() => handleBlur(linha3Ref)}
        />
        <div id="linha03" ref={linha3Ref} />
      </div>
      <div>
        <label htmlFor="isenha">Senha:</label>
        <input
          id="isenha"
          ref={inputSenhaRef}
          onFocus={() => handleFocus(linha4Ref)}
          onBlur={() => handleBlur(linha4Ref)}
        />
        <div id="linha04" ref={linha4Ref} />
      </div>
    </form>
  );
};

export default Formulario;
