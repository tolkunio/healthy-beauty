import React from 'react';
import styled from "styled-components";
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../FlexWrapper';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
const items =['Здоровая мама','Важность правильного питания','Почему мы?','Где заказать?']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};
const StyledHeader=styled.header`
`
