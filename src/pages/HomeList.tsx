import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { Results } from "../components/Results";
import { getListTracks } from "../redux/HomeList/actions";

export const HomeList = () => {
  const [track, setTrack] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getListTracks(track));
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTrack(e.target.value);
  };

  return (
    <div className="container bg-black h-100vw">
      <Header/>

      <div className="d-flex justify-content-center my-1">
        <input className="radius-10 py-1 px-2 fs-5 outline-none border-none" type="text" placeholder="Tu canción" onChange={changeInput} />
        <button className="radius-10 py-1 px-2 bg-green fs-4 border-none ms-1" type="button" onClick={handleSubmit}>
           <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      
      <main className="bg-light h-65 text-dark mt-5 rounded-3 p-1 overflow-scroll">
        <Results />
      </main>
    </div>
  );
};
