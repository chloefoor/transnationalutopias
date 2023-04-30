import { Container, Row, Col } from "react-bootstrap";
import amelioroblesavila from '../assets/amelioroblesavila.jpg'

const AmelioRoblesAvila = (props) => {


    return <Container>
        <h2>Amelio Robles Ávila: Transgender Zapatista</h2>

        <Row>
            <Col xs={12} sm={6} md={4}>
                <img width="100%" height="auto" src={amelioroblesavila} alt="Amelio Robles Ávila" />
                <p>Amelio Robles Ávila exhibiting <em>machismo</em></p>
            </Col>

            <Col xs={12} sm={6} md={8}>
                <p>
                    Despite the discrimination that queer people faced in the anarchist movement, there were a few individuals who rose to
                    prominence in spite of their queerness. One such person was Amelio Robles Ávila, who did not necessarily identify as an anarchist
                    but lived out anarchist values in practice. He joined the Zapatista movement, which “fought to keep collective ownership of the
                    land and to defend their traditional boundaries and autonomy in the face of the gathering forces of modernization and long-running
                    agrarian disputes.” These goals align with anarchist ideals of independence from statehood and government, and the independence of a
                    group of people being able to live as they see fit without government interference. Therefore, despite not aligning himself with
                    anarchism specifically, he lived out its ideals in practice. Throughout the Mexican Revolution, Robles Ávila became a decorated
                    veteran, receiving multiple awards including his incorporation into the Mexican Legion of Honor and receiving the Revolutionary
                    Merit Award.

                </p>

                <p>
                    The astonishing thing about Robles Ávila, aside from all of his military feats, was that he was transgender and was able to rise
                    above the gender binary to live out anarchist ideals. He was born in 1889, a time when there was no definition of transgender.
                    This is not to say that trans people did not exist – they definitely did– but they did not have a word for it. As a child, Robles
                    Ávila showed an affinity for exercises traditionally associated with males, such as riding horses and handling weapons. He started
                    going by the name “Amelio” after joining the army, and it was there that he was accepted by his brothers in combat as male. This
                    transition towards maleness was “established mainly through a gender performance,” where Robles Ávila would exhibit a masculine
                    character to an extreme, such that there would be no questioning whether he was a man or not. Even later in life, a neighbor
                    reported that he would take out his pistol if anyone referred to him as a woman. He was able to gain societal acceptance from
                    those that he encountered, despite his queerness.
                </p>

                <p>
                    However, Robles Ávila’s transition was more than a simple change from identifying as female to male, it also reinforced a gender
                    hierarchy that anarchism and other leftist ideologies fought against; it “simultaneously subverted and reinforced normative
                    heterosexuality and stereotypical masculinity it re-created.” In the same way that anarchists often ended up reproducing
                    heteropatriarchal state ideals, Robles Ávila did the same thing by embracing the <em>machismo</em> of the Mexican Revolution. <em>Machismo</em> was
                    a sense that embraced traditional gender roles and amplified what we today would call “toxic masculinity.” Through embracing the
                    misogynistic ideals of <em>machismo</em>, Robles Ávila was able to become a “socially acceptable” transgender person through over-the-top
                    depictions of masculinity.

                </p>

            </Col>
        </Row>
    </Container>

}

export default AmelioRoblesAvila;