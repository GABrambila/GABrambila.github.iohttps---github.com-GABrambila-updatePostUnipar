import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to="/">Inicio</Link>
			<Link to="/add">Adicionar Post</Link>
			
			<Link to="/enderecos">Posts</Link>
		</header>
	);
};

export default Header;


//<Link to="/perfil">Listar Post</Link> extraido linha 9. 