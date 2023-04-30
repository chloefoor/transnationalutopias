import { Container, Row, Col } from 'react-bootstrap';
import emmagoldman from '../assets/emmagoldman.jpg'


const QueernessAndAnarchism = (props) => {


    return <Container>
        <h2>The Relationships Between Queerness and Anarchism</h2>
        <Row>
            <Col xs={12} xl={12}>
                <p>
                    Historically, queer people have been persecuted by both the church and the state, simply for existing.
                    Thus, it is not that much of a leap for them to become associated with anarchist ideals, which imagine a future with no state,
                    no religion, and no hierarchies. The two movements have many similarities. Both anarchists and queers have been “othered” from a
                    society where “the discourses of heterosexuality, whiteness, and capitalism reproduce themselves into a model of power..” Both
                    “converge around four important themes; a rejection of the paternalistic state; support for a politics of freedom and autonomy; a
                    critique of normative assumptions about the world; and a mutual respect for pleasure.” Therefore the ties between these two
                    movements should be implicit in the fabric of each one; that “the struggle against state and capitalism must simultaneously be a
                    struggle against white supremacy, heteropatriarchy, and all forms of oppression and exploitation.” Queerness and anarchism seem to
                    be a match made in heaven.
                </p>
            </Col>

            <Col xs={12} sm={6} md={4}>
                <img width="100%" height="auto" src={emmagoldman} alt="Emma Goldman" style={
                    {
                        padding: "10px"
                    }
                } />
                <p>Emma Goldman</p>
            </Col>

            <Col xs={12} sm={6} md={8}>

                <p>
                    The queer and anarchist movements <em>have</em> intertwined with, and even supported, each other, as may be expected.
                    Anarchists defended Oscar Wilde while he was on trial for “indecency” and “sodomy,” or homosexuality, during the late
                    nineteenth century; this trial served as the “catalyst for a symbiosis between anarchist politics and gay rights.” Anarchist
                    icon Emma Goldman defended Wilde during his trial, and in 1911, almost twenty years later, she “ripped marriage to shreds in
                    her essay <em>Marriage and Love</em> by fiercely critiquing marriage’s reinforcement of prescribed gender roles, patriarchy, and the
                    nuclear family.” She was “without question, the first person to lecture openly on homosexual liberation.” These examples exhibit
                    what we might expect in this relationship; each supporting the other in the hopes of creating a future without hierarchy,
                    especially a heteropatriarchal hierarchy.
                </p>

                <p>
                However, there are also instances where anarchists and other leftists rejected solidarity with, and were even hostile towards,
                queer liberation. Though not anarchist, “the [Communist Party] enacted the first ‘Don’t Ask Don’t Tell policy’ against
                homosexuals.” In Cuba, another place where communism reigned, gay men were relegated to “<em>Unidad Militar de Ayuda a la
                    Producción</em> labor camps where they [were] forced to work as virtual slaves in the production of sugar for the Castro regime.”
                Under this regime, which was supported by many anarchists despite its inherent contradictions with the movement, homosexuality
                was viewed as a “middle-class bourgeois disease that [would] disappear with the decadence of capitalism,” barring homosexuals
                from interacting with children or representing their country abroad. Though none of these instances are specifically about
                anarchists persecuting the queer community, many anarchists shared these sentiments with their communist counterparts and
                likely held similar views and did similar things toward their queer siblings.

            </p>
            </Col>

            

            <p>
                Many anarchists in Latin America idealized, and even romanticized, pre-colonial indigenous communities as anarchism being
                lived out in practice. While there are many flaws with their view of indigenous communities, most are outside the scope of
                this paper. However, one interesting concept that <em>does</em> relate to the scope is that indigenous societies were much less gendered
                than their European counterparts, with some scholars even arguing that they might not have been gendered at all. Patriarchy is
                upheld through the gender binary, so colonizers imposed this model on the Americas to institute a heteropatriarchal system. In
                addition to this, the Spanish colonizers both feminized the Indigenous people and demonized homosexual behavior. Therefore, it
                is curious that anarchists in Latin America both romanticized the precolonial indigenous way of life, while at the same time
                ignoring the inherently queer parts of that society. Despite their best efforts, Latin American anarchists ended up reproducing
                state logic surrounding the heteropatriarchy. These two movements should have complemented each other, but in the end, internalized hierarchies won, and anarchists suppressed the voices of their queer militants.

            </p>
        </Row>
    </Container>
}

export default QueernessAndAnarchism;