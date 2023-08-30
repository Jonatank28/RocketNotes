// Libs
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

// Components
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

// Styled Components
import { Container, Form, Background, } from './styles'

import { Link} from 'react-router-dom'

export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Crie sua conta</h2>
                <Input
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                />
                <Input
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button title="Cadastrar"/>

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}