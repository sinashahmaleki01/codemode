
//--------------------|📝 : Team box

const teamData = [
    {
        id: 3,
        name: "سید امیرحسین امین",
        role: "فرانت اند",
        image: "/frontend.webp",
        links: { github: { url: "https://github.com/AmirhoseinAmin", icon: "/github-40.webp" } }
    },
    {
        id: 2,
        name: "سینا شاه ملکی",
        role: "بک اند",
        image: "/backend.webp",
        links: { github: { url: "https://github.com/sinashahmaleki01", icon: "/github-40.webp" } }
    },
    {
        id: 1,
        name: "مهدیه گودرزی",
        role: "هوش مصنوعی",
        image: "/ai.webp",
        links: { github: { url: "https://github.com/", icon: "/github-40.webp" } }
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