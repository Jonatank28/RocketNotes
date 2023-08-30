import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout} from './slyles'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/Jonatank28.png" 
                    alt="Imagem perfil GitHub" 
                />
                <div>
                    <span>Bem vindo,</span>
                    <strong>Jonatan S Almeida</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}