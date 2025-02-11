function Tabs({ children, buttons, ButtonsContainer = "menu" }) { // [2] ---- or we do it like this and get rid of [1]
  // buttonsContainer is the prop that helps us to set the component type that wraps the buttons dynamically i.e. menu
  //const ButtonsContainer = buttonsContainer; // [1] ---- if we don't do it this way and just write buttonsContainer instead of
  // ButtonsContainer, react looks for a component named buttonsContainer and throws an error
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;