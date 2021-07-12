import styled from 'styled-components/native'


export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,

    }
}))`margin-top: 25px;`;


export const Option = styled.TouchableOpacity`
    background: ${({bgColor}) => bgColor};
    width: 150px;
    height: 170px;
    border-radius: 10px;
    padding: 15px;
    margin-right: 16px;
    margin-bottom: 16px;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: white;
    font-size: 13px;
    font-weight: bold;
    text-align: left;
`;

export const Img = styled.Image`
    align-self: center;
`;
