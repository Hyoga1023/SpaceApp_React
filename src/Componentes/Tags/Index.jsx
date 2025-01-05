import tags from "./tags.json";
import styled from "styled-components";

const TagsEstilizadas = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 5px;
  align-items: center;
`;

const TagTitulo = styled.p`
  color: #ccc;
  font-size: 24px;
`;

const BotonTag = styled.button`
  background-color: gray;
  color: #ccc;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #555;
    color: white;
  }
`;

const Tags = ({ filtrarPorTag }) => {
  return (
    <TagsEstilizadas>
      <TagTitulo>Buscar por Tags:</TagTitulo>
      <BotonTag onClick={() => filtrarPorTag(null)}>
        Todos
      </BotonTag>
      {tags.map((tag) => (
        <BotonTag key={tag.id} onClick={() => filtrarPorTag(tag.id)}>
          {tag.titulo}
        </BotonTag>
      ))}
    </TagsEstilizadas>
  );
};

export default Tags;
