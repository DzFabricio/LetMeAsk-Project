import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoIng from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
//import { useContext } from 'react' <-- as duas importações são removidas pois agora pode usar o useAuth de hooks e fazer 1 import
//import { AuthContext } from '../contexts/AuthContext'

export function NewRoom() {
    const { user } = useAuth();
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


                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>

                    </form>
                    <p>
                        Quer entrar em uma sala existente?<Link to="/">Clique aqui </Link>
                    </p>

                </div>
            </main>
        </div>
    )
}