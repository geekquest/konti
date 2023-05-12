import Card from 'react-bootstrap/Card'
import { Balancer } from 'react-wrap-balancer'

export default function ({ project }) {
    return (
        <div className="contribution-card">
            <Card>
                <Card.Body>
                    <Card.Title>
                        <Balancer>{project.title}</Balancer>
                    </Card.Title>
                    <Card.Text>
                        {project.isOpenToContribution ? 'Open to Contributions' : 'Closed to Contributions'}
                        <p>Total Contributed: MWK {project.totalContributed}</p>
                        <p>Total Contributors: {project.totalContributors}</p>
                        <p>{project.description}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <a href="">View More</a>
                </Card.Footer>
            </Card>
        </div>
    )
}