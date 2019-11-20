const Conditional = (props) => {
    if (props.if) {
      return props.children;
    }
    return null;
  };
  
  export default Conditional;