import { useState, type FormEvent } from 'react';

export default function RegistroEstudiante() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div>
      <h2>Registro de Estudiante</h2>

      {enviado ? (
        <div style={{ marginTop: '10px', background: '#e0ffe0', padding: '10px' }}>
          <p>¡Gracias <strong>{nombre}</strong>!</p>
          <p>Hemos registrado tu correo: <strong>{correo}</strong></p>
          <p>Carrera: <strong>{carrera}</strong></p>
          <p>Comentarios: {comentarios}</p>
        </div>
      ) : (
        <form onSubmit={manejarEnvio}>
          <div>
            <label htmlFor="nombre">Nombre completo:</label><br />
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="correo">Correo electrónico:</label><br />
            <input
              id="correo"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="carrera">Carrera o especialidad:</label><br />
            <input
              id="carrera"
              type="text"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="comentarios">Comentarios:</label><br />
            <textarea
              id="comentarios"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Enviar</button>
        </form>
      )}
    </div>
  );
}
