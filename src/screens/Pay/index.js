import React from 'react';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'

import {
    Wrapper,
    Title,
    Header,
    OptionsContainer,
    OptionsLabel,
    Bold,
    CashLabel
} from './styles'


export default function Pay() {
    return(
        <Wrapper>
            <Header colors={['#52E78c', '#1AB563']}>
                <Title>Pague suas contas com o <Bold>PicPay</Bold></Title>
                <CashLabel>No primeiro pagamento, você recebe 5% de Cashback</CashLabel>
            </Header>

            <OptionsContainer>
                <AntDesign name="barcode" size={30} color="white"/>
                <OptionsLabel>Pagar conta de Luz, Àgua, Boleto e etc.</OptionsLabel>
            </OptionsContainer>

            <OptionsContainer>
                <AntDesign name="creditcard" size={30} color="white"/>
                <OptionsLabel>Pagar fatura de Cartão com o PicPay</OptionsLabel>
            </OptionsContainer>

            <OptionsContainer>
                <MaterialCommunityIcons name="cash-usd" size={30} color="white"/>
                <OptionsLabel>Faça um PIX utilizando o PicPay</OptionsLabel>
            </OptionsContainer>
        </Wrapper>
    )
}