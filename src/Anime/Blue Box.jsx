import React from "react";
import PosterImage from "../assets/8.jpg";

const BlueBox = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4">
            <h1 className="text-4xl font-nsansHead font-bold mb-4">
            Blue Box
            </h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Blue Box Poster"
              className="w-72 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/tcK9Eghsfq8?si=9kzS80QmwUKBGhAa"
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
          <p className="text-gray-300 mt-2">Taiki Inomata, a third-year student in junior high, attends Eimei Academy, an integrated school with a major sports program. Having joined the high school badminton team, Taiki tries to attend open practice as early as possible. But no matter how early he goes, he always arrives second in the gymnasium. The person one step ahead of him is Chinatsu Kano, a first-year student in senior high and Taiki's crush. Chinatsu is the rising star of the basketball team, and the gap between her and Taiki could not be greater. Although Taiki is a decent badminton player, his popularity is nowhere near Chinatsu's, making it even less likely for his feelings to be reciprocated. However, in a strange twist of fate, she ends up living in Taiki's house! Wanting to become a worthy match for Chinatsu, Taiki pursues the same dream as his crush: to partake in the Nationals. Taiki starts training harder than ever before, all for the sake of building a strong relationship with his new housemate. [Written by MAL Rewrite]. 
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong> ?/10
            </p>
            <p>
              <strong>📺 Premiered:</strong>Fall 2024
            </p>
            <p>
              <strong>🎭 Genres:</strong> Romance, Sports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueBox;
