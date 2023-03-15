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

export {LoginForm};