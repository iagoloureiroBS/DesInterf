
import Avatar from './Avatar.jsx';

/*
Ao aniñar contido dentro dunha etiqueta JSX, o compoñente pai recibirá ese contido a través dunha prop 
chamada children. No exemplo a continuación, o compoñente Card recibe unha prop children 
co valor de  e o renderiza dentro dun div contedor:
*/

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Perfil() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
