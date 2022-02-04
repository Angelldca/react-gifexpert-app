import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifGridItem } from "./GifGridItem";




export const GifGrid = ({ category }) => {
   
      const {data:images, loading} = useFetchGifts(category);
  
    
    return (
        <>
         <h3 className=" animate__animated animate__fadeIn">{category}</h3>

          {loading && <p className="imate__animated animate__flash">loading</p>}
            <div className="card-grid ">
               

                {
                    images.map((img, index) => {
                        return (
                            
                            <GifGridItem
                                key={img.id}
                                {...img}

                            />
                        )
                    })
                }
            </div>
        </>

    )
}