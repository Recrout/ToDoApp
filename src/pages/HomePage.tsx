import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";

export const PageWrapper = styled.div`
 padding: 100px;
`

const NavigationBlock = styled.div`
  border: 2px black solid;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  a {
    width: 45%;
  }
`

const HomePage: FC = () => {
    return (
        <NavigationWrapper>
            <NavLink to={"/todo"}>
                <NavigationBlock>
                    My todo list
                </NavigationBlock>
            </NavLink>
            <NavLink to={"/authors"}>
                <NavigationBlock>
                    Authors
                </NavigationBlock>
            </NavLink>
        </NavigationWrapper>
    );
};

export default HomePage;