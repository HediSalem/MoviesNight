import React from "react";

function MoviePosters(props) {
  const { member } = props;

  const posterPath = member.poster_path;
  const imageUrl = `https://image.tmdb.org/t/p/w200${posterPath}`;

  return (
    <div className="col-md-1" style={{ marginRight: "2%" }}>
      <img
        key={member.id}
        src={imageUrl}
        alt={member.name}
        style={{ width: 100, height: 150 }}
      />
      <p>{member.title ? member.title : member.name}</p>
      <p style={{ color: "gray", fontSize: 12 }}>{member.vote_count}</p>
    </div>
  );
}

export default MoviePosters;
