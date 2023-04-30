import { Container, Row, Col } from "react-bootstrap";
import killthecop from '../assets/killthecop.jpg'


const Limitations = (props) => {


    return <Container>
        <h2>Limitations of Queer Anarchism in History</h2>
        <Row>
            <Col>
                <p>
                    Queer anarchists did exist. Some might have been shunned by their fellow anarchists, but they still definitely existed.
                    So where are they in the historical record? I believe that they were purposefully excluded from the archive by the heteropatriarchal
                    state. These gaps are especially prominent “before the public emergence of a lesbian and gay movement in the United States in the
                    1960s,” only showing that queerness was only seen as a valid identity once the state deemed it to be. However, queer people have
                    always existed, and will always continue to exist, even without the validation of state historical records.
                </p>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={6} md={8}>

                <p>
                    Infighting also among anarchist groups also leads to this discrepancy in the archive. In general, Latin American anarchists
                    loved to play identity politics, constantly fighting over who was “more anarchist” than the other. The same sentiment can be
                    extended to queerness, and to queer anarchists. These identity politics are decidedly anti-anarchist, as they impose a
                    hierarchical view onto the movement, but the militants imposed them just the same. The way to combat identity politics is
                    to “find ways to foster and preserve the queering of space… Queer space can never be entirely queer, but it is never entirely
                    not queer either.” These issues surrounding identity politics still exist today, and the only way to combat them is to “confront
                    our own internalized homophobia, misogyny, and racism…[to] rethink norms, not as repressive homogenizers, but as shared ethical
                    commitments” and thus “perhaps rethink normality as a basis upon which individual identifications and practices can acquire the
                    collective force of the movement culture from which they emerge.” These sentiments reflect the anarchist adage to “Kill the cop in
                    your head,” which is much easier said than done. Society has imposed and encoded “rigid, easily identifiable, and heavily policed”
                    identities for people to claim, but these identities create oppressive hierarchies that people must work to fight against.
                    We cannot remedy the historical archival discrepancy, but we can ensure that there is a place for queer anarchists in history
                    going forth.

                </p>
            </Col>
            <Col xs={12} sm={6} md={4}>
                <img width="100%" height="auto" src={killthecop} alt="Kill the cop in your head" />
                <p>Graffiti saying "Kill the Cop in Your Head"</p>
            </Col>
            <Col xs={12} sm={12} md={12}>

                <p>
                    Queer anarchists might have been silenced from the historical record, but they have always existed. The theoretical
                    symbiosis between anarchism and queerness was wrought with contradictions and hypocrisy. On one hand, anarchism was a
                    philosophy that rejected hierarchies, both state-imposed and self-imposed, with one of these hierarchies being the
                    heteropatriarchy. However, anarchists often ended up reproducing much of this state logic in response to their queer
                    revolutionary siblings. Current-day anarchofeminist icon Luisa Capetillo condemned homosexuals and polygamists, as they did
                    not fit into her moral hierarchy. However, queer anarchists <em>did</em> exist in Latin America; Amelio Robles Ávila lived much of his
                    life as a man and even gained respect among his fellow Zapatista revolutionaries. This seeming acceptance of queer people was
                    a double-edged sword, as Robles Ávila had to perform <em>machismo</em> to be accepted, rejecting femininity altogether whether he wanted
                    to or not. Irina Layevska Echeverría Gaitán, another trans individual, manipulated Che Guevarra’s “New Man” to become something
                    that could offer her comfort and power because of her disability, not in spite of it. Though purposefully excluded from the
                    archives and from the anarchist movement, queer anarchists have found places to thrive. There has been a lot of work done towards
                    the liberation of queer anarchists, but there is still a long way to go, and we must “create space wherein it is possible for
                    desire to flourish… We must become bodies in revolt… We can learn to be a threat, we can become the queerest of insurrections.”
                </p>
            </Col>

        </Row>
    </Container>

}

export default Limitations;