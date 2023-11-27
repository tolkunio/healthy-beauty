import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
type HeaderMenuPropsType ={
    menuItems:string[]
}

export const HeaderMenu = (props:HeaderMenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((element,id)=>{
                    return <StyledListItem key={id}>
                        <Link href={'#'}>{element}</Link>
                    </StyledListItem>
                })}
            </ul>

        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu= styled.nav`
    ul{
      display: flex;
      gap: 30px;
    }
`
const StyledListItem = styled.li`
    
`
const Link = styled.a`
  color: ${theme.colors.baseFontColor};
  font-size: 18px;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
`