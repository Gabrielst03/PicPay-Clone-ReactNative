import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';


export const Wrapper = styled.ScrollView`
    flex: 1;
    background: #000;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
    align-items: center;
    justify-content: center;
    background: #0db060;
`

export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
`;

export const CashLabel = styled.Text`
    text-align: center;
    margin-top: 15px;
    color: #fff;
`;

export const OptionsContainer = styled.TouchableOpacity`
    margin-top: 15px;
    margin-left: 16px;
    margin-right: 16px;
    padding: 16px;
    background: #1c1c1e;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;

`;

export const OptionsLabel = styled.Text`
    margin-left: 15px;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;