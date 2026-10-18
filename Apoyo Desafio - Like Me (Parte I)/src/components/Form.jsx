import { useState } from 'react';

function Form({ onAddPost }) {
  const [titulo, setTitulo] = useState('');
  const [img, setImg] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && img && descripcion) {
      onAddPost({ titulo, img, descripcion, likes: 0 });
      setTitulo('');
      setImg('');
      setDescripcion('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Agregar Post</button>
    </form>
  );
}

export default Form;
