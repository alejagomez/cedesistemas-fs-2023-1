import styled from "styled-components";

export const MenuContainer = styled.section`
border-right:4px solid #11123d;
width: 300px;
position: fixed; //fixed es estático
top: 0px;
background-color: #2C2E83;
height: 100%;
display: ${props => props.isShown ? 'block' : 'none'};
`;

export const MenuItemsWrapper = styled.ul`
padding:20px 15px;

a{
  color: #fff;
  text-decoration: none;
  &:hover{
    color: #2EAAE2;
  }
}

li{
  list-style: none;
  margin-top:10px;
  font-size: 1.3em;
}
`;

export const MenuCloseWrapper = styled.div`
display: flex;
justify-content: right;
padding: 20px;
svg{
  color: #fff;
  font-size: 1.3m;
  cursor: pointer;
  &:hover{
    color:#2EAAE2;
  }
}
`;
