export function Prueba({ nombre, apellido }) {
  const products = [
    { title: "Col", id: 1, description: "Hola" },

    { title: "Ajo", id: 2, description: "Hola" },

    { title: "Manzana", id: 3, description: "Hola" },

    { title: "Manzana Verde", id: 3, description: "Hola" },

    { title: "Manzana", id: 3, description: "Hola" },
  ];
  return (
    <>
      <h1> Hola </h1>
      <p>
        {" "}
        {nombre}
        {apellido}
      </p>
      {products.map((producto, i) => {
        return (
          <div class="color" key={producto.id}>
            <h2>Frustas":{producto.title}</h2>
            <p>{producto.description}</p>
          </div>
        );
      })}
    </>
  );
}
