import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

export const SeeTrack = () => {
  const data = useSelector((state: RootState) => state.detailTrack);

  const navigate = useNavigate();

  const redirecHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-black h-100vw text-light fs-5">
      <div className="container m-auto">
        <Header />
        <div className="row p-1 overflow-hidden d-md-flex justify-content-between">
          <div className="d-flex justify-content-center mb-4 col-md-3">
            <img className="img-track" src={data.albumImg} alt="Song" />
          </div>
          <div className="col-md-7">
            <p>
              <span className="fw-bold">Name:</span> {data.name}
            </p>
            <p>
              <span className="fw-bold">Duración:</span> {data.duration / 1000}{" "}
              seg
            </p>
            <p>
              <span className="fw-bold">Artista:</span> {data.artistName}
            </p>
            <p>
              <span className="fw-bold">Álbum:</span> {data.albumName}
            </p>
            <p>
              <span className="fw-bold">Fecha:</span> {data.albumDate}
            </p>
            <a
              className="d-inline-block pb-3 w-100"
              href={data.externalUrl}
              rel="noreferrer"
              target="_blank"
            >
              {data.externalUrl}
            </a>
            <audio src={data.previewUrl} controls />
          </div>
        </div>

        <p className="text-end p-3 fs-3 mt-5 pointer" onClick={redirecHome}>
          <i className="fa-solid fa-angles-left me-2 "></i>Atrás
        </p>
      </div>
    </div>
  );
};
