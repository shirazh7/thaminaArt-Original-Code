import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #000000;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 550;
  border-radius: 10px;
  background-color: #FFC8C8;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #cf9f9f;
  }
  &:focus {
    outline: none;
  }
`;

export function Button(props) {
    const { size } = props;

    return (
        <ButtonWrapper size={size} className={props.className}>
            {props.children}
        </ButtonWrapper>
    );
}