import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px 32px;
  background-color: var(--hemocyanin);

  @media (max-width: 1200px) {
    padding: 20px 12px;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;
