import "../style/Title.css"
const Title = () => {
  return (
    <>
      <div className="container-title-1">
        <span className="span-img">
          <img src="/FabianAB.png" alt="avatar" />
        </span>
      </div>
      <div className="container-title-2">
        <h1>
          Hola, mi nombre es <span>Fabián Ávila</span> soy un programador web.
        </h1>
      </div>
    </>
  );
};

export default Title;
