import React from "react";
class LoginForm extends React.Component{
    render(){
        return(
            <>
            <Grid templateAreas={`"left right middle"`} gap='1'>
                <GridItem area="left">
                <Stack spacing={4}>
                    <h1 size="lg">Login</h1>
                    <small>Email</small>
                    <Input placeholder='email' type="email" size='sm'/>
                    <small>Password</small>
                    <Input placeholder='Tags' type="password" size='sm'/>

                    <Button mt="4p">Login</Button>
                </Stack>
                </GridItem>
            </Grid>
            </>
        );
    }
}

class RegistrationForm extends React.Component{
    render(){
        return (
            <>
            <Grid templateAreas={`"left right middle"`} gap='1'>
                <GridItem area="left">
                <Stack spacing={4}>
                    <h1 size="lg">Login</h1>
                    <small>Full Name</small>
                    <Input placeholder='full name' type="text" size='sm'/>
                    <small>Email</small>
                    <Input placeholder='email' type="email" size='sm'/>
                    <small>github username</small>
                    <Input placeholder='text' type="text" size='sm'/>
                    <small>twitter username</small>
                    <Input placeholder='text' type="text" size='sm'/>
                    <small>Phone</small>
                    <Input placeholder='phoneNumber' type="text" size='sm'/>
                    <small>Password</small>
                    <Input placeholder='Tags' type="password" size='sm'/>
                    <small>Confirm Password</small>
                    <Input placeholder='Tags' type="password" size='sm'/>

                    <Button mt="4p">Login</Button>
                </Stack>
                </GridItem>
            </Grid>
            </>
        );
    }
}


export {LoginForm, RegistrationForm};