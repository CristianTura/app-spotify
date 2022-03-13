import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Tracks } from "./Tracks";

interface IItems {
  items: any[];
}
interface IList {
  tracks: IItems;
  search: boolean;
}

export const Results = () => {
  const data: IList = useSelector((state: RootState) => state.tracks);

  const track = data.tracks.items;
  return (
    <>
      {Object.keys(data.tracks).length > 0 ? (
        track.map((item) => <Tracks {...item} key={item.id} />)
      ) : (
        <div className="m-5 p-5 text-center">
          <h1 className="line-height-3 py-5 ">
            {!data.search
              ? "Resultados de tu búsqueda"
              : "No se han encontrado resultados"}
          </h1>
        </div>
      )}
    </>
  );
};
