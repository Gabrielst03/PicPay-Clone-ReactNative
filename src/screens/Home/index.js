import React from 'react';
import {Text} from 'react-native'
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import Suggestions from '../../components/Suggestions'
import Activies from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'


import { Wrapper, Header, BalanceContainer, Balance, BalanceTitle, Container } from './styles';

export default function Home() {
    return(
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>

                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ 20,00</Balance>

                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e"/>
                </Header>

                <Suggestions />
                <Activies />
                <Tips/>
                <Banner/>
            </Container>
        </Wrapper>
    )
}