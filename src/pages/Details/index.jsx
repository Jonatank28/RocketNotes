import React from 'react'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Header } from '../../Components/Header'
import { Section } from '../../Components/Section'
import { Tag } from '../../Components/Tag'
import { Container, Lista, Content } from './styles'

import { Link} from 'react-router-dom'

export function Details() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <ButtonText title="Excluir a nota" />
                    <h1>Introdução ao React</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum numquam odio vitae adipisci, repellendus, perferendis eaque ea molestias et velit odit tenetur! Perspiciatis ad laborum doloremque, reprehenderit voluptates tempora similique!</p>
                    <Section title="Links úteis">
                        <Lista>
                            <li><a href="#">https://www.rocketseat.com.br/</a></li>
                            <li><a href="#">https://www.rocketseat.com.br/</a></li>
                        </Lista>
                    </Section>
                    <Section title="Marcadores">
                        <Tag title="Express" />
                        <Tag title="Nodejs" />
                    </Section>
                    <Link to="/">
                        <Button title="Voltar" />
                    </Link>
                </Content>
            </main>
        </Container>
    )
}


