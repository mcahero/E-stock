function SwitchAcc(props) {
    const handleClick = () => {

      console.log('Switch Account button clicked');
    };
  
    return (
      <button onClick={handleClick}>Switch To Employee</button>
    );
  }
  
  export default SwitchAcc;