import './NotFound.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {

	useEffect(() => {
		document.title = `Kasa | Not Found`
	}, [])

	return (
		<div className="notFound-container">
			<h1 className='notFound_title'>404</h1>
			<p className='notFound_infos'>Oups! La page que vous recherchez n'existe pas.</p>
			<Link to="/" className='notFound_redirection'>Retourner sur la page d'accueil</Link>
		</div>);
};

export default NotFound;