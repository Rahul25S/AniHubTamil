import React from "react";
import PosterImage from "../assets/4.jpg";

const SakamotoDays = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4">
            <h1 className="text-4xl font-nsansHead font-bold mb-4">
            Sakamoto Days
            </h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Sakamoto Days Poster"
              className="w-72 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/TlP-RRo5b-8?si=8GH9a_wEnoNDzKJU"
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
          <p className="text-gray-300 mt-2">Tarou Sakamoto was considered the greatest hitman of all time. Feared by many, he stood at the top of the underground world until he met and fell in love with a woman. As a result, Sakamoto abandoned his life of crime and now works as a convenience store clerk. Leaving his shady past behind proves more difficult than Sakamoto initially imagined. Many of his former rivals and partners do not believe that he has truly left the business and show up in hopes of taking him out. Barred from killing, Sakamoto must find creative ways to subdue his enemies and prevent them from bringing harm to his family, his store, and the small town he resides in. 
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong> ?/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Winter 2025
            </p>
            <p>
              <strong>🎭 Genres:</strong> Action, Comedy, Shounen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SakamotoDays;
