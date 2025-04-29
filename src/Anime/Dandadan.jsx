import React from "react";
import PosterImage from "../assets/9.jpg";

const Dandadan = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-2 md:p-6">
        <div className="flex flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4 ">
            <h1 className="md:text-4xl text-2xl font-nsansHead font-bold md:mb-4">Dandadan</h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Dandadan Poster"
              className="md:w-72 w-40 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <div className="w-full md:h-[400px] h-[200px]">
              <iframe
                width="100%"
                height="100%"
              src="https://www.youtube.com/embed/NRxTXed7I7k?si=69AkrTRQWOF-CSfF"
              title="Anime Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white p-6 mt-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-300 mt-2">Reeling from her recent breakup, Momo Ayase, a popular high schooler, shows kindness to her socially awkward schoolmate, Ken Takakura, by standing up to his bullies. Ken misunderstands her intentions, believing he has made a new friend who shares his obsession with aliens and UFOs. However, Momo's own eccentric occult beliefs lie in the supernatural realm; she thinks aliens do not exist. A rivalry quickly brews as each becomes determined to prove the other wrong. Despite their initial clash over their opposing beliefs, Momo and Ken form an unexpected but intimate friendship, a bond forged in a series of supernatural battles and bizarre encounters with urban legends and paranormal entities. As both develop unique superhuman abilities, they learn to supplement each other's weaknesses, leading them to wonder if their newfound partnership may be about more than just survival.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong>  8.73/10
            </p>
            <p>
              <strong>📺 Premiered:</strong>Fall 2024
            </p>
            <p>
              <strong>🎭 Genres:</strong>  Action, Comedy, Supernatural.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dandadan;
