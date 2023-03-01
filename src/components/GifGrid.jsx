import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<div>Cargando....</div>)
            }
            {
                images.length > 1
                ? (<div className="card-grid">
                        { images.map(( image ) => (
                            <GifGridItem key={ image.id } { ...image }/>
                            ))}
                    </div>)
                : (<><h4>...No se encontraron imagenes!!!</h4><hr/></>)
            
            }
        </>
    )
}