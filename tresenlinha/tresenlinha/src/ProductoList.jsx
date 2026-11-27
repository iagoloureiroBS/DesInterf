import ProductoCard from "./ProductoCard";

export default function ProductoList({productos}) {
  return (
    <div className="row row-cols-1 md:row-cols-2 g-4">   

        productos.map( p =>
          <div key={p.id} className="col">
            <ProductoCard producto={p}/>        
          </div>
        )
      
    </div>
  );
}