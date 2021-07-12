import React from 'react'
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import {
    Container, 
    Header, 
    Title, 
    Avatar, 
    Card, 
    CardHeader, 
    Description, 
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles'

import avatar from '../../images/avatar.png'

export default function Activies() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>Ricardo Silva</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Gabriel Santana</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 12,85</Value>

                        <Divider />

                        <Feather name="lock" color="rgba(255, 255, 255, 0.4)" size={15}/>
                        <Date>há 25 minutos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}