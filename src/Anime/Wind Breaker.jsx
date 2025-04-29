import React from "react";
import PosterImage from "../assets/10.jpg";

const WindBreaker = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-2 md:p-6">
        <div className="flex flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4 ">
            <h1 className="md:text-4xl text-2xl font-nsansHead font-bold md:mb-4">
              Wind Breaker
            </h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Wind Breaker Poster"
              className="md:w-72 w-40 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <div className="w-full md:h-[400px] h-[200px]">
              <iframe
                width="100%"
                height="100%"
              src="https://www.youtube.com/embed/62r_G9bEPlU?si=DLGCILClCKiKqlgs"
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
          <p className="text-gray-300 mt-2">From an early age, Haruka Sakura was made an outcast due to his unconventional appearance and lack of social skills. However, the rough treatment turned him into a proficient fighter, which is now the only thing he prides himself on. Starting at Furin High School, where it is rumored that strength is valued over academics, Sakura has only one goal—taking the top spot. Involved in a street brawl the day before his enrollment, Sakura happens to meet a group of his future schoolmates. Instead of the usual rejection, they fight alongside him, demonstrating that what the school actually cares about is protecting the town of Makochi from any harm—hence why the students call themselves "Bofurin." Surprised by the support and appreciation of the townspeople, Sakura has a hard time accepting their goodwill. Though unfamiliar with kindness being shown to him, Sakura must learn to push past his discomfort when Bofurin is pitted against formidable enemies. After experiencing the feeling of acceptance, he finds himself fighting for the sake of others for the first time.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong>  7.86/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Spring 2024
            </p>
            <p>
              <strong>🎭 Genres:</strong> Action, Comedy, Drama, School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindBreaker;
