
//--------------------|📝 : Team box

const teamData = [
    {
        id: 3,
        name: "سید امیرحسین امین",
        role: "فرانت اند",
        image: "https://img.icons8.com/clouds/100/code.png",
        links: { github: { url: "https://github.com/AmirhoseinAmin", icon: "https://img.icons8.com/fluency-systems-filled/40/282c37/github.png" } }
    },
    {
        id: 2,
        name: "سینا شاه ملکی",
        role: "بک اند",
        image: "https://img.icons8.com/clouds/100/programming--v1.png",
        links: { github: { url: "https://github.com/sinashahmaleki01", icon: "https://img.icons8.com/fluency-systems-filled/40/282c37/github.png" } }
    },
    {
        id: 1,
        name: "مهدیه گودرزی",
        role: "هوش مصنوعی",
        image: "https://img.icons8.com/clouds/100/adobe-illustrator.png",
        links: { github: { url: "https://github.com/", icon: "https://img.icons8.com/fluency-systems-filled/40/282c37/github.png" } }
    }
];

function TeamBox() {
    return (
        <ul className="team-box">
            {teamData.map(member => (
                <li className="team-box__member" key={member.id}>
                    <img src={member.image} alt={member.name} />
                    <div>
                        <p>{member.role}</p>
                        <h3>{member.name}</h3>
                        <a href={member.links.github.url}>
                            <img src={member.links.github.icon} alt="icon" />
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default TeamBox;