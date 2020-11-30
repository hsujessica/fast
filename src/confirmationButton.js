
export const ConfirmationButton = ({selected, setConfirmed}) => {

  const handleClick = () => {
    setConfirmed(true)
  }

  return (
    <button className="confirmation-button" onClick={handleClick}>
      Confirm selection
    </button>
  );
};
