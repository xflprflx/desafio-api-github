import Button from '../../components/Button';

import './styles.css';

function Home() {
    return (
        <section className="home-section">
            <div className="container">
                <div className="home-content">
                    <h1>Desafio GitHub API</h1>
                    <h3>DevSuperior - Escola de programação</h3>
                </div>
                <Button text="Começar" />
            </div>
        </section>
    );
}

export default Home;