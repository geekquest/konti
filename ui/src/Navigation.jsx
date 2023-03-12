import React from "react";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'


class Navigation extends React.Component{
    render(){
        return (
            <List spacing={3}>
                <ListItem>
                    Projects
                </ListItem>
                <ListItem>
                    People
                </ListItem>
                <ListItem>
                    Contributions
                </ListItem>
                <ListItem>
                    Settings
                </ListItem>
            </List>
        );
    }
}
export  {Navigation};