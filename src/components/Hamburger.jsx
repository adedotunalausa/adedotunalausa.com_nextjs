import React, { useState } from "react"
import styled from "styled-components"
// import { NavLinks } from "./NavLinks"

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 12px;
    right: 25px;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.15rem;
        background-color: ${({ open }) => open ? "#5B6E80" : "#3A61E2"};
        border-radius: 10px;
        transform-origin: 1.5px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
            width: 1.04rem;
            height: 0.15rem;
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
            width: 1.04rem;
            height: 0.15rem;
        }
    }
`;

const Hamburger = ({ open }) => {

    return (
        <>
            <StyledBurger open={open}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </>
    )
}

export default Hamburger