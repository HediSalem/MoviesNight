import React from "react";

function CastImage(props) {
  const { member, user } = props;

  const profilePath = member.profile_path;
  const imageUrl = `https://image.tmdb.org/t/p/w200${profilePath}`;

  return profilePath ? (
    <div className="col-md-1" style={{ marginRight: "2%" }}>
      <img
        key={member.id}
        src={imageUrl}
        alt={member.name}
        style={{ width: 100, height: 150 }}
      />
      <p>{member.name}</p>
      <p style={{ color: "gray", fontSize: 12 }}>{member.character}</p>
    </div>
  ) : (
    <div className="col-md-1" style={{ marginRight: "2%" }}>
      <img
        key={member.id}
        src={user}
        alt={member.name}
        style={{ width: 100, height: 150, marginRight: "1.5%" }}
      />
      <p>{member.name}</p>
      <p style={{ color: "gray", fontSize: 12 }}>{member.character}</p>
    </div>
  );
}

export default CastImage;
