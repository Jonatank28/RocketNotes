import { Container, Form } from './styles'

import { Header} from '../../Components/Header'
import { Input } from '../../Components/Input'
import { TextArea } from '../../Components/TextArea'
import { NoteItem } from '../../Components/NoteItem'
import { Section } from '../../Components/Section'
import { Button } from '../../Components/Button'

import { Link } from 'react-router-dom';

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">
                            voltar
                        </Link>
                    </header>
                    <Input
                        placeholder="Titulo"
                        type="text"
                    />
                    <TextArea placeholder="Observações" id={10}/>
                    <Section title="Links úteis">
                    </Section>
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem isNew placeholder="Novo link"/>
                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}