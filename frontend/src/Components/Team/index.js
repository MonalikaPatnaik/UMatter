import React, { useEffect, useState } from "react";

function Teams() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const owner = "MonalikaPatnaik";
    const repo = "UMatter"; 

    fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
      })
      .catch((error) => {
        console.error("Error fetching contributors:", error);
      });
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-6xl text-6xl font-bold title-font mb-4 text-white">Meet Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Thank you to all the amazing contributors who have contributed to this project! Your efforts are greatly
            appreciated. 💙
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="p-4 lg:w-1/4 md:w-1/2 w-full">
              <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                <div className="h-full bg-white bg-opacity-20 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-110">
                  <img
                    alt={`${contributor.login}'s Profile`}
                    className="w-full h-72 object-cover object-center mb-4 rounded-lg cursor-pointer transform transition-transform hover:scale-110"
                    src={contributor.avatar_url}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-medium text-white">{contributor.login}</h2>
                    <h3 className="text-gray-300 mb-3">
                      {contributor.login === "MonalikaPatnaik" ? "Project Admin" : "Contributor"}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
