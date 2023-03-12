import React from "react";
import { Input, Stack, Textarea, Checkbox, Button, Select, Grid, GridItem } from '@chakra-ui/react'


class Contribution extends React.Component{
    render(){
        return (
            <>
            <Grid templateAreas={`"left right middle"`} gap='1'>
                <GridItem area="left">
                <Stack spacing={4}>
                    <h1 size="lg">Contribution</h1>
                    <small>Select Project</small>
                    <Select placeholder='Select Project'>
                    </Select>
                    <small>Contributor</small>
                    <Select placeholder='Select Contributor'>
                    </Select>
                    <small>Amount</small>
                    <Input type="number" size='sm'/>
                    <small>Contributed on</small>
                    <Input type="date" placeholder='Date' size='sm'/>
                    <small>Channel</small>
                    <Select placeholder='Select Contributor'>
                    </Select>
                    <small>acknowledged</small>
                    <Checkbox >Acknowledged</Checkbox>
                    <small>createdAt</small>
                    <Input type="date"/>
                    <small>Updated At</small>
                    <Input type="date"/>
                    <small>Email Sent</small>
                    <Checkbox >Thank you email sent</Checkbox>

                    <Button mt="4px">Save</Button>
                </Stack>
                </GridItem>
            </Grid>
            </>
        );
    }
}
export {Contribution};