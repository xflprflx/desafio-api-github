import './styles.css';

type Props = {
    avatar_url: string;
    url: string;
    followers: number;
    location: string;
    name: string;
}

function ResultCard({ avatar_url, url, followers, location, name } : Props) {
    return (
        <div className="section-card">
            <div className="container bg-light">
                <div className="profile-image">
                    <img src={avatar_url} className="img-fluid" alt={name} />
                </div>

                <div className="profile-info-container">
                    <div className="profile-title text-primary">
                        <h5>Informações</h5>
                    </div>

                    <div className="profile-info">
                        <div className="profile-url">
                            <p>Perfil: </p>
                            <span>
                                <a href={url}>{url}</a>
                            </span>
                        </div>

                        <div className="profile-followers">
                            <p>Seguidores: </p>
                            <span>{followers}</span>
                        </div>

                        <div className="profile-location">
                            <p>Localidade: </p>
                            <span>{location}</span>
                        </div>

                        <div className="profile-name">
                            <p>Nome: </p>
                            <span>{name}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ResultCard;