import styled from "styled-components";

const BannerEstilizado = styled.div`
  width: 100%;
  height: 100%; 
  margin-top: 0;
  background-image: url("/banner.png");
  background-size: cover;  
  background-position: center;  
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 90px 20px;
  color: white;  
  font-size: 1.5rem;
  text-align: left;
  gap: 10px;
`;

const Banner = () => {
  return (
    <BannerEstilizado>
      <h2>La galeria más</h2>
      <h2>completa de fotos</h2>
      <h2>del espacio</h2>
    </BannerEstilizado>
  );
};

export default Banner;
