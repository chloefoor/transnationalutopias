import { Container, Row, Col } from "react-bootstrap";
import luisacapetillo from '../assets/luisacapetillo.jpg'

const LuisaCapetillo = (props) => {


    return <Container>
        <h2>Luisa Capetillo: Queer Icon?</h2>

        <Row>
            <Col xs={12} sm={6} md={4}>
                <img width="100%" height="auto" src={luisacapetillo} alt="Luisa Capetillo" />
                <p>Luisa Capetillo</p>
            </Col>

            <Col xs={12} sm={6} md={8}>
                <p>

                    Present-day queer icon, Luisa Capetillo, is a figure who today’s anarchists idolize as a pioneer in breaking gender roles,
                    and, theoretically by extension, championing queer liberation. She was arrested multiple times for wearing pants, refusing to
                    submit to state-sponsored gender hierarchies. Capetillo was an advocate for free love, which many anarchists today understand
                    as the freedom to love who one wants to love, whether it be someone of the opposite sex, same-sex, a single person, or multiple
                    people. Today, she would be classified as an anarchofemininist, despite not having that exact term in her day. It is no wonder
                    that modern-day anarchists consider her a queer icon.

                </p>
                <p>
                    In actuality, however, Capetillo was a host of contradictions, a condition that was common among Latin American anarchists.
                    Her writings have strong moral and hierarchical undertones which were heavily influenced by Christianity, despite anarchism
                    condemning hierarchies. She frequently condemned “fallen people” and wrote of the need for the “enlightened” to guide them
                    toward utopia. For Capetillo, these “fallen people” included those who “illegally gambled for extra income, who got drunk,
                    who lived excessively, or who had vices.” Considering Capetillo’s moral views, homosexuality likely falls under the umbrella of
                    “vices.” In her utopia, every person would work and have a family which would be composed of a man, woman, and children. She was
                    not afraid to condemn those who variated from this ideal.

                </p>


                <p>
                    Her version of “free love” was more of a “liberal variant of sequential heterosexual monogamy,” instead of an embrace of
                    homosexuality, queerness, and love in all of its forms. It was less so a stance against heteropatriarchy itself and was
                    instead a stance against state involvement in validating relationships. Capetillo condemned “degenerate” sex, which, for her,
                    included both homosexuality and polygamy, and she was not the only anarchist who did so. Sociologist Maxine Molyneux cites
                    frequent occurrences of these same ideas being reproduced by the Buenos Aires anarchist community. This limiting view of
                    sexuality enforced the very same heteropatriarchal hierarchy that anarchists were fighting to dismantle. Theoretically,
                    the anarchist version of free love should include those who identify as queer and polyamorous, especially seeing as
                    “the practice of monogamy is particularly ideological suspect to anarchists because of its ties to capitalism, patriarchy,
                    and the state.” However, anarchism had multitudes of contradictions between what it should be theoretically and what it was
                    in actuality.
                </p>
            </Col>
        </Row>
    </Container>

}

export default LuisaCapetillo;