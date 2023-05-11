import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Balancer } from 'react-wrap-balancer'

export default function({ project }) {
    return (
        <div className="contribution-card">
            <Card>
                <CardHeader>
                    <h3><Balancer>{project.title}</Balancer></h3>
                    {project.isOpenToContribution ? 'Open to Contributions' : 'Closed to Contributions' }
                </CardHeader>
                <CardBody>
                    <p>Total Contributed: MWK {project.totalContributed}</p>
                    <p>Total Contributors: {project.totalContributors}</p>
                    <Text>{project.description}</Text>
                </CardBody>
                <CardFooter>
                    <a href="">View More</a>
                </CardFooter>
            </Card>
        </div>
    )
}