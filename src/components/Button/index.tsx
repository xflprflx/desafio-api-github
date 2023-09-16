import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    text: string;
}

function Button({ text }: Props){
    return(
        <div>
            {text === 'Começar' ? 
            <Link to="/search" className="btn btn-primary btn-custom" role="button">{text}</Link> : 
            <button type="submit" className="btn btn-primary btn-custom">{text}</button>}
        </div>
    );
}

export default Button;