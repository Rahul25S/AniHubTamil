import React from "react";
import PosterImage from "../assets/19.png";

const ClassroomElite = () => {
  return (
    <div className="flex flex-grow absolute w-full" style={{ top: "10%" }}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg items-center gap-x-4">
          <div className="md:w-2/5 p-4">
            <h1 className="text-4xl font-nsansHead font-bold mb-4">
              Classroom of the Elite
            </h1>
            <img
              src={PosterImage} // Use the imported image
              alt="Classroom of the Elite Poster"
              className="w-72 h-auto rounded-lg"
            />
          </div>

          <div className="md:w-4/5 flex justify-center p-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/6Gx4pQ14HLk?si=bohKfFlDcHHzrFMR"
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
            On the surface, Koudo Ikusei Senior High School is a utopia. The
            students enjoy an unparalleled amount of freedom, and it is ranked
            highly in Japan. However, the reality is less than ideal. Four
            classes, A through D, are ranked in order of merit, and only the top
            classes receive favorable treatment. Kiyotaka Ayanokouji is a
            student of Class D, where the school dumps its worst. There he meets
            the unsociable Suzune Horikita, who believes she was placed in Class
            D by mistake and desires to climb all the way to Class A, and the
            seemingly amicable class idol Kikyou Kushida, whose aim is to make
            as many friends as possible. While class membership is permanent,
            class rankings are not; students in lower ranked classes can rise in
            rankings if they score better than those in the top ones.
            Additionally, in Class D, there are no bars on what methods can be
            used to get ahead. In this cutthroat school, can they prevail
            against the odds and reach the top?
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p>
              <strong>⭐ Rating:</strong> 7.86/10
            </p>
            <p>
              <strong>📺 Premiered:</strong> Summer 2017
            </p>
            <p>
              <strong>🎭 Genres:</strong> Drama, School, Slice of Life, Psychological.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomElite;
