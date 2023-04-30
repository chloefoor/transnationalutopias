import { Container, Row, Col } from 'react-bootstrap';
import anarchoqueerflag from '../assets/Queer_anarchism_flag.svg.png'

const About = (props) => {


    return <Container>
        <h2>About this project</h2>
        <Row>
            <Col xs={12} sm={6} md={4}>
                <img width="100%" height="auto" src={anarchoqueerflag} alt="Anarchoqueer flag" style={
                    {
                        padding: "10px"
                    }
                } />
            </Col>
            <Col xs={12} sm={6} md={8}>
                <p>Defining anarchism is almost as difficult as defining queerness, seeing as there is no set canon for either identity. Both queer liberation and anarchist movements are self-made and member-driven,
                    constantly striving for a better world by living out desired principles in the present day. Seeing as anarchism is the practice of working towards equality for all classes, races, genders, and more,
                    it is “ideologically consistent for anarchists to take up queers’ resistance of the established hierarchical valuation of sexual identities and practices.” However, in examining anarchist movements
                    across Latin America, historians often see the opposite, with queer people being shunned or actively persecuted by anarchist leaders and militants. By exploring the similarities and historical
                    relationships between the two movements, the lives and actions of select queer and anarchist icons of Latin America, and the limitations of examining queerness during the anarchist movement,
                    one can see how this contradiction came to be.
                </p>

                <p>This project was done by Chloe Foor for History 500: Transnational Utopias taken at the University of Wisconsin - Madison.</p>
            </Col>
        </Row>
    </Container>
}

export default About;