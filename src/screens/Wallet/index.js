import React, {useState} from 'react';
import {Switch} from 'react-native'

import {
    Wrapper,
    Header,
    HeaderContainer,
    Value,
    Bold,
    Title,
    BalanceContainer,
    EyeButton,
    Info,
    Actions,
    ActionLabel,
    ActionsContainer,
    UseBalance,
    UseBalanceTitle,
    PaymentMethodsTitle,
    PaymentsMethods,
    Card,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    CardBody,
    AddButton,
    AddLabel,
    TicketContainer,
    TicketLabel,
} from './styles'

import creditcard from '../../images/credit-card.png'

import {Feather, MaterialCommunityIcons, FontAwesome, AntDesign} from '@expo/vector-icons'

export default function Wallet() {

    const [isVisible, setVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function ToggleBalance() {
        setVisible((prevState) => !prevState)
    }

    function ToggleUseBalance() {
        setUseBalance((prevstate) => !prevstate)

    }

    return(
        <Wrapper>
            <Header colors={
                useBalance ? ['#52E78c', '#1AB563'] :
                ['#d3d3d3', '#868686']
            }>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>R$ <Bold>{isVisible ? '20,00' : '----'}</Bold></Value>

                        <EyeButton onPress={ToggleBalance}>
                            <Feather name={isVisible? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>

                    </BalanceContainer>
                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>
                    <ActionsContainer>
                        <Actions activeOpacity={0.5}>
                            <MaterialCommunityIcons name="cash" size={27} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Actions>

                        <Actions activeOpacity={0.5}>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Actions>
                    </ActionsContainer>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch 
                    value={useBalance}
                    onValueChange={ToggleUseBalance}
                    trackColor={{true: '#0dd060', false: 'gray'}}
                    thumbColor={'#fff'}
                />
            </UseBalance>

            <PaymentsMethods>
                <PaymentMethodsTitle>Formas de Pagamento</PaymentMethodsTitle>
            </PaymentsMethods>

            <Card>
                <CardBody>
                    <CardDetails>
                        <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                        <CardInfo>
                            Cadastre um cartão de crédito para poder fazer
                            pagamentos mesmo quando não tiver saldo no seu PicPay.
                        </CardInfo>
                    </CardDetails>
                    <Img source={creditcard} resizeMode="contain"/>
                </CardBody>
            
                <AddButton>
                    <AntDesign name="pluscircleo" size={30} color="#0DB060"/>
                    <AddLabel>Adicionar cartão de crédito</AddLabel>
                </AddButton>
            </Card>

            <TicketContainer>
                <MaterialCommunityIcons name="ticket-outline" size={24} color="#0db060" />
                <TicketLabel>Usar código promocional</TicketLabel>
            </TicketContainer>
        </Wrapper>
    )
}