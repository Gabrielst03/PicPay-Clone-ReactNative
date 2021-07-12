import styled from "styled-components/native";

export const Container = styled.View`
    background: #6662bb;
    margin: 25px 16px;
    border-radius: 8px;
    height: 130px;
    flex-direction: row;
    padding: 15px;
    align-items: center;
`;

export const Details = styled.View`
    flex: 1;

`;

export const Img = styled.Image`
    width: 70px;
    height: 70px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 13.5px;
    margin-top: 15px;
    margin-right: 10px;
`;