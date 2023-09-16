import axios from 'axios';
import { useState } from 'react';
import { User } from 'types/user';
import Button from '../../components/Button';
import ResultCard from '../../components/ResultCard';
import './styles.css';

type FormData = {
    user: string;
}

function SearchUser() {

    const [formData, setFormData] = useState<FormData>({
        user: ''
    });

    const [user, setUser] = useState<User>();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.user}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setUser(undefined);
            })
    }

    return (
        <>
            <main>
                <div className="container main-container">
                    <div className="search-inside-container bg-secondary">
                        <div className="search-title">
                            <h2>Encontre um perfil Github</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="user"
                                value={formData.user}
                                placeholder="Usuário Github"
                                onChange={handleChange}

                            />

                            <Button text="Encontrar" />
                        </form>
                    </div>

                    {user &&
                        <ResultCard avatar_url={user.avatar_url} url={user.url} followers={user.followers} location={user.location} name={user.name} />}
                </div>
            </main>



        </>
    );
}

export default SearchUser;