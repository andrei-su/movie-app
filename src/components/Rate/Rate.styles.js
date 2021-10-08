import styled from "styled-components";

export const Wrapper = styled.div`
    p {
        width: fit-content;
    }
    p > button {
        border: 1px solid var(--lightGrey);
        min-width: 90px;
        height: 40px;
        font-size: 20px;
        ;
    }
    p > button:hover {
        background: var(--white);
        color: var(--darkGrey);
    }
`;

export const Slider = styled.div`
    display: flex;
    
    .rate__value {
        margin-left: 10px;
        font-weight: bold;
        font-size: 20px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`;