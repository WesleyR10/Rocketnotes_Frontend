import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'


export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quod corporis! Voluptates atque exercitationem error laborum aliquam sequi quibusdam beatae, ab tempora. Soluta consectetur cum perspiciatis dolores facere, nostrum iste?</p>

          <Section title="Links úteis">
            <Links>
              <li> <a href="#">https://www.rocketseat.com.br/</a> </li>
              <li> <a href="#">https://www.rocketseat.com.br/</a> </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}

