import LogoSvg from "../components/Logo";

const notFound = () => {
  return (
    <>
      <LogoSvg height="400px" color="#333" />
      <h1>Aucune page ne correspond à votre requête</h1>
    </>
  );
};

export default notFound;
