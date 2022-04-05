import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAngleDown } from "react-icons/fa";
import Button from '../Button';

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        fixed
        flex
        flex-row
        justify-between
        items-center
        bg-background
        px-40
    `}
`

const Logo = styled.h4`
    ${tw`
        flex
        font-medium
        items-center
        justify-center
        after:flex
        after:h-4
        after:bg-black
        after:w-0.5
        after:mx-5
    `}
`

const Line = styled.span`
    ${tw`
        h-6
        bg-black
    `}
`

const Navbar = styled.ul`
    ${tw`
        flex
        list-none
    `}
`

const NavbarItem = styled.li`
    ${tw`
        flex
        font-medium
        pr-8
        items-center
        justify-center
    `}
`

const ButtonContainer = styled.div`
    ${tw`
        flex
    `}
`

const Icon = styled.span`
    ${tw`
        font-light
        pl-2
    `}
`

const Header = () => {
    return (
        <NavbarContainer>
            {/* <Line></Line> */}
            <Navbar>
                <Logo>Interface Store</Logo>
                <NavbarItem>
                    Website
                    {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
                    <Icon>
                        <FaAngleDown />
                    </Icon>
                </NavbarItem>
                <NavbarItem>
                    Sell
                    <Icon>
                        <FaAngleDown />
                    </Icon>
                </NavbarItem>
                <NavbarItem>
                    Marketing
                    <Icon>
                        <FaAngleDown />
                    </Icon>
                </NavbarItem>
                <NavbarItem>
                    Manager
                    <Icon>
                        <FaAngleDown />
                    </Icon>
                </NavbarItem>
            </Navbar>
            <ButtonContainer>
                <Button text="Log in"></Button>
                <Button text="Trial" theme="filled"></Button>
            </ButtonContainer>
        </NavbarContainer>
    )
}

export default Header;