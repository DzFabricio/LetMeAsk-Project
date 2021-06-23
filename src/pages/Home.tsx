
import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import logoIng from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button'
//import { useContext } from 'react';                            <-- as duas importações são removidas pois agora pode usar o useAuth de hooks e fazer 1 import
//import { AuthContext } from '../contexts/AuthContext';                                      
import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()




    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new');
    }
    return (
        <div id="page-auth">

            <aside>
                <img src={illustrationImg} alt="Ilustração perguntas e repostas" />
                <strong> Crie Salas de P&amp;R ao vivo rapaz</strong>
                <p>Tire as dúvidas de pessoas da sua audiência em tempo real</p>

            </aside>
            <main>
                <div className="Main-content">
                    <img src={logoIng} alt="pergunteask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        Ou entre em uma sala
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>

                    </form>

                </div>
            </main>
        </div>
    )
}