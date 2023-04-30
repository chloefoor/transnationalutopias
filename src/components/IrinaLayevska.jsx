import { Container, Row, Col } from "react-bootstrap";
import irinalayevska from '../assets/irinalayevska.jpg'


const IrinaLayevska = (props) => {


    return <Container>
        <h2>Irina Layevska Echeverría Gaitán: The New Woman</h2>

        <Row>
            <Col xs={12} sm={6} md={4}>
                <p> </p>
                <img width="100%" height="auto" src={irinalayevska} alt="Irina Layevska Echeverría Gaitán" />
                <p>Irina Layevska Echeverría Gaitán</p>
            </Col>

            <Col xs={12} sm={6} md={8}>
                <p>
                    Another transgender icon in leftist circles is Irina Layevska Echeverría Gaitán. Born to communist parents, Irina was a “child of
                    the Mexican student and leftist movements that emerged in the wake of the Cuban revolution.” Like Amelio, Irina herself never
                    identified as an anarchist, though she most definitely lived out anarchist principles. At a young age, Irina became disabled due
                    to illness. At the age of thirty-six, she began the process of transitioning to a woman. Most of Irina’s life has been spent at the
                    intersection of anarchism, queerness, and disability.
                </p>

                <p>
                    Historically, the lives of disabled people and queer people have been intertwined, as both have had an “oppressive medical model…
                    and the threat of eugenic extermination” imposed upon them. For a long time, homosexuality was considered a mental illness and
                    queers were treated as mentally ill. Society did not build itself to benefit either disabled or queer people; it constructed itself
                    as if disability did not exist and as if heterosexuality is the only way to love another person. Despite this oppression, both queer
                    and disability activists have refused to be silenced in such a society; Echeverría Gaitán’s life is a perfect example of this.
                </p>

                <p>
                    While growing up, Irina found solace in Che Guevara, who had asthma. Though not as debilitating as her own disability, Gaitan found a
                    sense of kinship with Guevara, leading to her embrace of his ideas of the “New Man.” This “New Man” was someone who put the needs of
                    the community before their own, who worked hard to benefit society as a whole, and who had overcome the selfish values promoted by
                    capitalism. There were many iterations of this New Man implemented by various groups of people, and many made him a “patriarchal and
                    masculinist figure, rejecting “sexual deviants” such as homosexuals and sex workers as counterrevolutionary.” However, Irina saw a
                    way that she could become this “New Man” without betraying her queer or disabled identities that the traditional “New Man” might have
                    rejected. Thus, “Gaitán constructed herself as a revolutionary in [Che’s] image. In addition to imitating his appearance, she adopted
                    her own interpretation of the moral and ethical code of the New Man. Her performance clashed with the <em>machismo</em> of her fellow
                    militants,” causing backlash from her fellow leftists. Despite this backlash, Irina has stayed true to her own identities and lived
                    life as a proud disabled trans woman, saying that “[she has] dedicated [her] entire life to [her] ideological self-transformation to
                    become the New Woman, for the construction of socialism, not the one that they wanted to impose with Stalin, but a real one.”

                </p>
            </Col>
        </Row>
    </Container>

}

export default IrinaLayevska;