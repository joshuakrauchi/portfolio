import ProjectEntry from "./ProjectEntry";
import majorMiners from "/public/majorminers.png";
import GitHubIcon from "/public/GitHubIcon.svg";
import SteamIcon from "/public/SteamIcon.svg";
import itchioIcon from "/public/itchioIcon.svg";
import devpostIcon from "/public/devpostIcon.svg";
import numberNinja from "/public/numberNinja.png"
import directX12Engine from "/public/directX12Engine.png";
import reshoot from "/public/reshoot.png";
import Image from "next/image";

const Portfolio = () => {
  const previewComponentClass: string = "place-self-center aspect-video w-full basis-2/3";

  return (
    <div className="pt-4 flex flex-col">
      <ProjectEntry
        previewComponent={<video className={previewComponentClass} src="https://cdn.cloudflare.steamstatic.com/steam/apps/256850599/movie480_vp9.webm" controls={true} autoPlay={true} muted={true} loop={true} />}
        isLeft={true}
        title="Video Horror Society"
        position="Gameplay / Tools / AI Developer"
        framework="Unreal Engine 4"
        languages="C++, Python"
        description="80s horror-themed asym game that pits 4 teens against a terrifying monster!"
        bullets={[
          "Used Behavior Trees and EQS to implement AI systems for four different enemies.",
          "Eliminated shader compilation stutters by creating a Pipeline State Object generation tool.",
          "Developed a software packaging tool using C++ and Slate UI.",
          "Refactored the weapons system to have a more uniform object-oriented design.",
        ]}
        links={[
          { iconSrc: SteamIcon, linkSrc: "https://store.steampowered.com/app/611360/Video_Horror_Society/" },
        ]}
      />
      <ProjectEntry
        previewComponent={<video className={previewComponentClass} src="https://cdn.cloudflare.steamstatic.com/steam/apps/256853231/movie480_vp9.webm" controls={true} autoPlay={true} muted={true} loop={true} />}
        isLeft={false}
        title="Spooky Horror Game"
        position="Developer"
        framework="Unreal Engine 4"
        languages="Blueprints Scripting / C++"
        description="A large prison, four enigmatic monsters, and you. Act fast, ration your items, and keep moving, because they are relentless."
        bullets={[
          "Self-developed passion project.",
          "Integrated AI to power features such as enemy audio/visual perception, patrolling, and decisions.",
          "Designed and implemented an inventory system, gun mechanics, and randomized spawning logic.",
        ]}
        links={[
          { iconSrc: SteamIcon, linkSrc: "https://store.steampowered.com/app/1764910/Spooky_Horror_Game/" },
        ]}
      />
      <ProjectEntry
        previewComponent={<Image className={previewComponentClass} src={reshoot} />}
        isLeft={true}
        title="ReShoot"
        position="Developer"
        framework="Unity"
        languages="C#"
        description="Shoot your way out... and if you can't, rewind time! A traditional danmaku-style bullet maze experiment."
        bullets={[
          "Developed a 2D shooter game system with an additional mechanic - rewinding the trajectory of enemies and bullets.",
          "Utilized trigonometric functions for projectile patterns.",
          "Mapped animation sequences to enemy movement patterns for easily customizable patterns.",
          "Demo available on Itch.io.",
        ]}
        links={[
          { iconSrc: itchioIcon, linkSrc: "https://joshuakrauchi.itch.io/reshoot" },
          { iconSrc: GitHubIcon, linkSrc: "https://github.com/joshuakrauchi/shooter" },
        ]}
      />
      <ProjectEntry
        previewComponent={<Image className={previewComponentClass} src={numberNinja} />}
        isLeft={false}
        title="Number Ninja"
        position="Developer"
        framework="Unity"
        languages="C#"
        description="An arena fighter that combines the difficulty of Dark Souls, the intense boss fights of Furi, and mathematics!"
        bullets={[
          "Town One Game Jam 2 project.",
          "Implemented two enemy attacks: a projectile-based subtraction attack and a jumping division attack.",
        ]}
        links={[
          { iconSrc: GitHubIcon, linkSrc: "https://github.com/Mazianos/TownTwoAlt" },
        ]}
      />
      <ProjectEntry
        previewComponent={<Image className={previewComponentClass} src={directX12Engine} />}
        isLeft={true}
        title="DirectX 12 Game Engine"
        position="Engine Developer"
        framework="DirectX 12"
        languages="C++"
        description=""
        bullets={[
          "Coded an API based on a component-oriented architecture which allowed for the creation of reusable components, such as for rendering and physics.",
          "Used the DirectX12 rendering pipeline to create a full software project.",
        ]}
        links={[
          { iconSrc: GitHubIcon, linkSrc: "https://github.com/notyalcs/LBD_Engine" },
        ]}
      />
      <ProjectEntry
        previewComponent={<Image className={previewComponentClass} src={majorMiners} />}
        isLeft={false}
        title="Major Miners"
        position="Developer"
        framework="Unity"
        languages="C#"
        description="A two-person local multiplayer tower defense game. One places attackers, one places towers."
        bullets={[
          "Town One Game Jam project.",
          "Implemented tower functionality and firing mechanics for 3 different towers.",
          "Worked closely with the sound engineer to implement in-game music and sound cues.",
          "Demo available on Itch.io.",
        ]}
        links={[
          { iconSrc: itchioIcon, linkSrc: "https://mark-keeble.itch.io/major-miners" },
          { iconSrc: GitHubIcon, linkSrc: "https://github.com/metalpipemomo/townone-team10" },
        ]}
      />
      <ProjectEntry
        previewComponent={<iframe className="place-self-center aspect-video w-full basis-2/3" src="https://www.youtube.com/embed/Yg10IbmY_nQ" title="YouTube video player" allow="web-share; fullscreen" />}
        isLeft={true}
        title="CodeHunter"
        position="Back-end Developer"
        framework="React, MongoDB"
        languages="JavaScript"
        description="A scavenger-type app where you scan QR codes to unlock rewards, designed to boost tourism in the city of Vancouver."
        bullets={[
          "BCIT Projects course final project with the theme of \"exploring/tourism\"",
          "Implemented back-end infrastructure such as REST API requests, server models, and routing.",
          "Created a secure datastore solution for user credentials and analytics using MongoDB with Mongoose.",
        ]}
        links={[
          { iconSrc: GitHubIcon, linkSrc: "https://github.com/dmgamboa/codehunter" },
        ]}
      />
      <ProjectEntry
        previewComponent={<iframe className="place-self-center aspect-video w-full basis-2/3" src="https://www.youtube.com/embed/zOv98-r_93w" title="YouTube video player" allow="web-share; fullscreen" />}
        isLeft={false}
        title="COVID-19 Worldwide"
        position="Developer"
        framework="React"
        languages="JavaScript"
        description="An interactive 3D visualization of the spread of COVID-19 across the world."
        bullets={[
          "BCIT game jam project.",
          "Utilized an open-source API to visualize a globe and adjust its settings.",
          "Retrieved and parsed visualization data.",
        ]}
        links={[
          { iconSrc: devpostIcon, linkSrc: "https://devpost.com/software/covid19-globe" },
        ]}
      />
    </div>
  );
};

export default Portfolio;