import styled from '@emotion/styled';

const Tabbed = styled.div`
    width: 200px;
    height: 200px;
    background-color: purple;
`;

const Tab = ({ children }) => {
    return <Tabbed>{children}</Tabbed>
}

export default Tab;