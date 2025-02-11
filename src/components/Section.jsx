function Section({ title, children, ...restProps}) { // restProps is an object that holds all the properties that we didn't destructure
  return <section {...restProps}>
    <h2>{title}</h2>
    {children}
  </section>;
}

export default Section;
