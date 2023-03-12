import React from "react";
import { Input, Stack, Textarea, Checkbox, Button } from '@chakra-ui/react'


class Project extends React.Component{
    render(){
        //states for checking project name
        // const [value, setValue] = React.useState('')
        // const handleChange = (event) => setValue(event.target.value)
        return (
            <>
                <Stack spacing={4}>
                    <h1>Project Form</h1>
                    <small>Project Name</small>
                    <Input placeholder='Project Name' size='sm'/>
                    <small>Description</small>
                    <Textarea placeholder='Project Description' size='sm'/>
                    <small>End Date</small>
                    <Input type="date" placeholder='Date' size='sm'/>
                    <small>End Date</small>
                    <Checkbox >Open to Contributions</Checkbox>
                    <small>Tags (separate each tag with comma)</small>
                    <Input placeholder='Tags' size='sm'/>

                    <Button mt="4p">Save</Button>
                </Stack>
            </>
        );
    }
}
export {Project};