import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'
import { Button } from '../../Components/Button'

import { Link } from 'react-router-dom';

import { Input } from '../../Components/Input'


import { Container, Form, Avatar} from './styles'

export function Profile(){
    return(
        <Container>
            <header>     
                <Link to="/">
                    <FiArrowLeft/>
                </Link>     
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/Jonatank28.png" 
                        alt="Foto úsuario" 
                    />
                    <label 
                        htmlFor="avatar"
                    >
                        <FiCamera />
                        <input 
                            type="file" 
                            id='avatar' 
                        />
                    </label>
                </Avatar>
                <Input 
                    icon={FiUser}
                    type="text"
                    placeholder="Úsuario"
                />
                <Input 
                    icon={FiMail}
                    type="email"
                    placeholder="E-mail"
                />
                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Senha atual"
                />
                <Input 
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                />
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}