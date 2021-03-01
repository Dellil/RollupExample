import { css } from '@emotion/react';

const Button = ({ content, onClick }) => {
    return <button css={css`
        background-color: ghostwhite;
    `} onClick={onClick}>{content}</button>
};

export default Button;