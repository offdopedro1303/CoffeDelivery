import { styled } from "styled-components";

export const ItemOfBuyList = styled.div`
  display: flex;
  padding: 8px 4px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;
