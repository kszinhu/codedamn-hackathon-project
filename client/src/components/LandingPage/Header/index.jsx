import { HeaderBody, Header as HeaderContainer } from "./styles";

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <HeaderBody>{children}</HeaderBody>
    </HeaderContainer>
  );
};