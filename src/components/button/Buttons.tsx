import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
color: #fff;
background: #7400b1;
font-size:16px;
`
const Button: React.FC=()=>{
    return (
        <StyledButton>
            Hello
            </StyledButton>

    )
}
export default Button;