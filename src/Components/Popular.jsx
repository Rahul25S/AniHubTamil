import React from "react";
import MovieBox from "./MovieBox.jsx";
import { movieData } from "./MovieData.jsx";

const Popular = () => {
  return (
    <div className="p-4">
      <h1 className="font-nsansHead text-3xl p-1 md:text-4xl md:p-4 text-white">
        POPULAR
      </h1>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movieData.map((movie, index) => (
          <MovieBox
            key={index}
            imageSrc={movie.imageSrc}
            label1={movie.label1}
            label2={movie.label2}
            label3={movie.label3}
            label4={movie.label4}
            title={movie.title}
            redirectLink={movie.redirectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
