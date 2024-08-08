import TeamCard from "../components/TeamCard";
import Promise from "../../public/images/Image.png";
import Taye from "../../public/images/Taye.png";
import Aje from "../../public/images/aje.png";
import Oto from "../../public/images/oto.png";

const Team = () => {
  const TeamData = [
    {
      image: Promise,
      name: "Ewongoabasi Inyang",
      title: "Co-founder",
      linkedIn: "linkedIn Profile",
    },
    {
      image: Taye,
      name: "Tayelolu Akinbohun",
      title: "Co-founder",
      linkedIn: "linkedIn Profile",
    },
    {
      image: Aje,
      name: "Omale Aje",
      title: "Lead Engineer",
      linkedIn: "linkedIn Profile",
    },
    {
      image: Oto,
      name: "Otobong Morgan",
      title: "Customer Delivery Officer",
      linkedIn: "linkedIn Profile",
    },
  ];
  return (
    <section className="pb-24">
      <h1>Our Team</h1>
      <div className="flex flex-col md:flex-row">
        {TeamData.map((teamdata, index) => (
          <TeamCard
            key={index}
            image={teamdata.image}
            name={teamdata.name}
            title={teamdata.title}
            linkedIn={teamdata.linkedIn}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
