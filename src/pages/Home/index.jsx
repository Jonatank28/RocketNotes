import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Input } from '../../Components/Input';
import { Section } from '../../Components/Section';
import { Note } from '../../Components/Note';

import { Link } from 'react-router-dom';

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li>
                    <ButtonText title="Todos" isActive/>
                </li>
                <li>
                    <ButtonText title="Frontend"/>
                </li>
                <li>
                    <ButtonText title="Node"/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
            </Menu>
            <Search>
                <Input 
                    placeholder="Pesquisar pelo título"
                />
            </Search>
            <Content>
                <Section title="Minhas notas" >

                    <Link to="/details/9">
                        <Note data={{ 
                            title: 'React', 
                            tags: [
                                {id: '1', name: 'React'},
                            ]
                        }}
                        />
                    </Link>

                    <Link to="details/7">
                        <Note data={{ 
                            title: 'Exemplo de MidWare', 
                            tags: [
                                {id: '1', name: 'Express'},
                                {id: '2', name: 'Nodejs'},
                            ]
                        }}
                        />
                    </Link>

                </Section>
            </Content>
            <NewNote to="new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}