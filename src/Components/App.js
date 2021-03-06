import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperation } from "../redux/auth";
import Pages from "../Routers/Routers";
import Container from "./Container";

import Header from "./Header";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperation.getCurrentUser())
  }, [dispatch])

  return (
    <>
      <Header />
      <Container>
        <Pages />
      </Container>
    </>
  )
}

export default App;
