import "../style/Title.css";
import Descarga from "./scripts/Descarga";


const Title = () => {
  const files = [
    {
      name: 'CV1_Fabian_Avila.pdf',
      id: 'CV1',
      url: '/CV.pdf' 
    },
    {
      name: 'CV2_Fabian_Avila.pdf',
      id: 'CV2',
      url: '/CVfabian avila.pdf' 
    }
  ];

  return (
    <>
      <div className="container-title-1" id="1">
        <span className="span-img">
          <img src="/FabianAB.png" alt="avatar" />
        </span>
      </div>
      <div className="container-title-2">
        <h1 className="container-title-2-h1">
          Hola, mi nombre es <span className="container-title-2-span">Fabián Ávila,</span> soy programador web.
        </h1>
        <>
          {files.map((file, index) => (
            <Descarga key={index} file={file} />
          ))}
        </>
      </div>
    </>
  );
};

export default Title;