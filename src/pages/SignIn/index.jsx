// Libs
import { FiMail, FiLock } from 'react-icons/fi'
import { Link} from 'react-router-dom'


// Components
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

// Styled Components
import { Container, Form, Background, } from './styles'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>
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
                <Button title="Enviar"/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}