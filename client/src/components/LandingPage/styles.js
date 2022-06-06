import { Group, Title as TitleComponent } from '@mantine/core'
import styled from "styled-components";

const Body = styled.div`
  margin: 5rem 2rem;

  height: 100%;
`;

const Title = styled(TitleComponent)`
  font-family: 'Work Sans', sans-serif;
  font-size: 4rem;
`;

const Container = styled.div`
`;

const TriviaGroup = styled(Group)`
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export { Body, Container, TriviaGroup, Title };
