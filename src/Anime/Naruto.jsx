import React from "react";
import PosterImage from "../assets/11.jpg";

const Naruto = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4">
            <h1 className="text-4xl font-nsansHead font-bold mb-4">Naruto</h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Naruto Poster"
              className="w-72 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/-G9BqkgZXRA?si=2pfQEUmwwFblVPHm"
              title="Anime Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-6 mt-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-300 mt-2">It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage. [Written by MAL Rewrite] 
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong>  8.15/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Winter 2007
            </p>
            <p>
              <strong>🎭 Genres:</strong>  Action, Adventure, Comedy, Martial Arts, Shounen, Super Power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naruto;
