const Button = ({isOpen, toggle}) => {
  return (
    <button onClick={toggle}>
      {isOpen ? (<p>-</p>) : (<p>+</p>)}
    </button>
  )
} 

export default Button