export const EventProps = () => { //  parent compont
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser // child compont in parent compont
        onButtonClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => { 
  const { onButtonClick, onMouseEnter } = props;
  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    onButtonClick();
  };
  return (
    <>
      <button onClick={onButtonClick}>Click</button>
      <button onMouseEnter={onMouseEnter}>Hover me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};