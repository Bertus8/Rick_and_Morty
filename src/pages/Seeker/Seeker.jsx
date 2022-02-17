import React from 'react';
import './Seeker.scss';


const Seeker = ({texto, setTexto}) => {
  
    const handleInputChange = ({target}) => {
      setTexto(target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault()
      
      console.log(texto);
    }
  return (
       <section className="TitleSection">

      <form class="form__group field" onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          placeholder="Buscar personajes"
          value={texto}
          onChange={handleInputChange}
        />
      </form>
    </section>);
};

export default Seeker;
