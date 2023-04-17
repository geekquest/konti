import React from "react";
import { Input, Stack, Textarea, Checkbox, Button, Select, Grid, GridItem } from '@chakra-ui/react'


class Project extends React.Component{
    render(){
        return (
            <>
            <Grid templateAreas={`"left right middle"`} gap='1'>
                <GridItem area="left">
                <Stack spacing={4}>
                    <h1 size="lg">Project Form</h1>
                    <small>Project Name</small>
                    <Input placeholder='Project Name' size='sm'/>
                    <small>Project Treasurer</small>
                    <Select placeholder='Select Project Treasurer'>
                    </Select>
                    <small>Description</small>
                    <Textarea placeholder='Project Description' size='sm'/>
                    <small>Start Date</small>
                    <Input type="date" placeholder='Date' size='sm'/>
                    <small>End Date</small>
                    <Input type="date" placeholder='Date' size='sm'/>
                    <small>Open to Contribution</small>
                    <Checkbox >Open to Contributions</Checkbox>
                    <small>Tags (separate each tag with comma)</small>
                    <Input placeholder='Tags' size='sm'/>

                    <Button mt="4p">Save</Button>
                </Stack>
                </GridItem>
            </Grid>
            </>
        );
    }
}
export {Project};