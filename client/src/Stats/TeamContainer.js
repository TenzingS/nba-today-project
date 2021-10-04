import React from 'react';

const TeamContainer = ({team}) => {

    const logos = [
        "https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif",
        "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
        "https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif",
        "https://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif",
        "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
        "https://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif",
        "https://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif",
        "https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif",
        "https://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif",
        "https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif",
        "https://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif",
        "https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif",
        "https://content.sportslogos.net/logos/6/236/thumbs/23637762019.gif",
        "https://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif",
        "https://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif",
        "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
        "https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif",
        "https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif",
        "https://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif",
        "https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
        "https://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif",
        "https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif",
        "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif",
        "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif",
        "https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif",
        "https://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif",
        "https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif",
        "https://content.sportslogos.net/logos/6/227/thumbs/22770242021.gif",
        "https://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif",
        "https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif"
    ]
    return (
        <div>
             {logos.map(logo => (
            <ul>
                <img src="logo"></img>
            {team.full_name}
            <br/>
            {team.abbreviation}
            <br/>
            Conference: {team.conference}
            <br/>
            Division: {team.division}
            <hr/>
            </ul>
            ))}
        </div>
    );
}

export default TeamContainer;
