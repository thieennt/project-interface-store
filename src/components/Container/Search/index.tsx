import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import ImgSearch from '../../../assets/images/Website/banner.png';
import { FaSearch } from "react-icons/fa";


const SearchContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
    `}

    img { 
        width: 100%;
        height: auto;
    }

`

const SearchBox = styled.div`
    ${tw`
        flex
        justify-between
        items-center
        px-5
        py-3
        w-3/12
        rounded-full
        content-center
        absolute
        top-36
        bg-background
    `}

    input:focus {
        outline:none;
    }
`

const Icon = styled.span`
    ${tw`
        text-xl
        text-gray-300
        font-light
    `}
`

const SearchComponent = () => {
    return (
        <SearchContainer>
            <img src={ImgSearch} alt="Search" />
            <SearchBox>
                <input type="text" placeholder="Look for interface..." />
                <Icon><FaSearch /></Icon>

            </SearchBox>
        </SearchContainer>
    )
}

export default SearchComponent;