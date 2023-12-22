import { BlogElement } from "./BlogElement";

export const App = () => {
  return (
    <>
      <h1>Blog list</h1>
      <BlogElement
        heading="Primera entrada de mi blog"
        content="Este es el contenido de la primera entrada del blog"
      />
    </>
  );
};
