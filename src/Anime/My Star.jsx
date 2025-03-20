import React from "react";
import PosterImage from "../assets/20.jpg";

const MyStar = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4">
            <h1 className="text-4xl font-nsansHead font-bold mb-4">My Star</h1>
            <img
              src={PosterImage} // Use the imported image
              alt="My Star Poster"
              className="w-72 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/zntY4A4GPU0?si=ccDzr0025zxzIqjs"
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
            In the entertainment world, celebrities often show exaggerated
            versions of themselves to the public, concealing their true thoughts
            and struggles beneath elaborate lies. Fans buy into these
            fabrications, showering their idols with undying love and support,
            until something breaks the illusion. Sixteen-year-old rising star Ai
            Hoshino of pop idol group B Komachi has the world captivated;
            however, when she announces a hiatus due to health concerns, the
            news causes many to become worried. As a huge fan of Ai,
            gynecologist Gorou Amemiya cheers her on from his countryside
            medical practice, wishing he could meet her in person one day. His
            wish comes true when Ai shows up at his hospital—not sick, but
            pregnant with twins! While the doctor promises Ai to safely deliver
            her children, he wonders if this encounter with the idol will
            forever change the nature of his relationship with her
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong>  9.33/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Spring 2023
            </p>
            <p>
              <strong>🎭 Genres:</strong>  Drama, Music, Supernatural, Seinen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStar;
