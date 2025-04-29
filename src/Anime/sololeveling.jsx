import React from "react";
import PosterImage from "../assets/2.jpg";

const sololeveling = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-2 md:p-6">
        <div className="flex flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4 ">
            <h1 className="md:text-4xl text-2xl font-nsansHead font-bold md:mb-4">
            Solo Leveling
            </h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Solo Leveling Poster"
              className="md:w-72 w-40 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <div className="w-full md:h-[400px] h-[200px]">
              <iframe
                width="100%"
                height="100%"
              src="https://www.youtube.com/embed/I6JIwjWOhnQ?si=L98gHjiBqwFpGk7O"
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
          <p className="text-gray-300 mt-2">
          Humanity was caught at a precipice a decade ago when the first gates—portals linked with other dimensions that harbor monsters immune to conventional weaponry—emerged around the world. Alongside the appearance of the gates, various humans were transformed into hunters and bestowed superhuman abilities. Responsible for entering the gates and clearing the dungeons within, many hunters chose to form guilds to secure their livelihoods. Sung Jin-Woo is an E-rank hunter dubbed as the weakest hunter of all mankind. While exploring a supposedly safe dungeon, he and his party encounter an unusual tunnel leading to a deeper area. Enticed by the prospect of treasure, the group presses forward, only to be confronted with horrors beyond their imagination. Miraculously, Jin-Woo survives the incident and soon finds that he now has access to an interface visible only to him. This mysterious system promises him the power he has long dreamed of—but everything comes at a price
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong> 8.39/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Winter 2024
            </p>
            <p>
              <strong>🎭 Genres:</strong> Action, Adventure, Fantasy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sololeveling;
