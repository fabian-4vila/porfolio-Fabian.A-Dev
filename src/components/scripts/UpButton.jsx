

const UpButton = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      };
  return (
    <button className="arriba" onClick={handleClick}>
      <img src="/arriba.png" alt="arriba" />
    </button>
  );
};

export default UpButton;
