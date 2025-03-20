import React from "react";
import PosterImage from "../assets/13.jpg";

const BlackClover = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4">
            <h1 className="text-4xl font-nsansHead font-bold mb-4">
              Black Clover
            </h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Black Clover Poster"
              className="w-72 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/PrgxJ1_sUcs?si=hY-gmpAy6YdrRGE_"
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
          <p className="text-gray-300 mt-2">
            Asta and Yuno were abandoned at the same church on the same day.
            Raised together as children, they came to know of the "Wizard
            King"—a title given to the strongest mage in the kingdom—and
            promised that they would compete against each other for the position
            of the next Wizard King. However, as they grew up, the stark
            difference between them became evident. While Yuno is able to wield
            magic with amazing power and control, Asta cannot use magic at all
            and desperately tries to awaken his powers by training physically.
            When they reach the age of 15, Yuno is bestowed a spectacular
            Grimoire with a four-leaf clover, while Asta receives nothing.
            However, soon after, Yuno is attacked by a person named Lebuty,
            whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight
            Lebuty, but he is outmatched. Though without hope and on the brink
            of defeat, he finds the strength to continue when he hears Yuno's
            voice. Unleashing his inner emotions in a rage, Asta receives a
            five-leaf clover Grimoire, a "Black Clover" giving him enough power
            to defeat Lebuty. A few days later, the two friends head out into
            the world, both seeking the same goal—to become the Wizard King!
            [Written by MAL Rewrite]
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong> 7.29/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Fall 2017
            </p>
            <p>
              <strong>🎭 Genres:</strong> Action, Comedy,Fantasy, Magic, Shounen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackClover;
