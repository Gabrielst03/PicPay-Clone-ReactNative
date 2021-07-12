import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.ScrollView`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Value = styled.Text`
    color: #fff;
    font-size: 36px;
    font-weight: 300;
`;

export const Bold = styled.Text`
    font-weight: bold
    font-size: 36px;
`;

export const BalanceContainer = styled.View`
    margin: 5px 0;
    flex-direction: row;
    align-items: center

`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    font-size: 11px;
    color: #fff;
    font-weight: bold
`;

export const Actions = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 30px;
    margin-left: 16px;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 150px;
    height: 45px;
    border-radius: 10px;
    justify-content: center;
`;

export const ActionLabel = styled.Text`
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
`;

export const ActionsContainer = styled.View`
    flex-direction: row;
`;

export const UseBalance = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #1c1c1e;
    height: 60px;
    padding: 0 16px;
    font-weight: 500;
`;

export const UseBalanceTitle = styled.Text`
    font-size: 14px;
    color: #fff;
`;

export const PaymentsMethods = styled.View`

    margin-top: 25px;
    padding: 0 16px;


`;

export const PaymentMethodsTitle = styled.Text`
    color: #8e8e93;
    text-transform: uppercase;
`;


export const Card = styled.View`
    background: #1e232a;
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 14px;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;

`;

export const CardInfo = styled.Text`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;

`;

export const Img = styled.Image`
    width: 60px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const AddLabel = styled.Text`
    margin-left: 15px;
    color: #0DB060;
    font-size: 15px;
    font-weight: bold;
`;

export const TicketContainer = styled.TouchableOpacity`

    flex-direction: row;
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const TicketLabel = styled.Text`
    color: #0db060;
    margin-left: 10px;
    text-decoration: underline;
`;
