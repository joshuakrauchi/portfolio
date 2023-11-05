import ContactButton from "./ContactButton";

const ProjectEntry = (props: { previewComponent: JSX.Element, isLeft: boolean, title: string, position: string, framework: string, languages: string, description: string, bullets: string[], links: { iconSrc: string, linkSrc: string }[] }) => {
  return (
    <>
      <div className={"animate__animated border border-2 border-white w-full mb-8 h-fit " + (props.isLeft ? "animate__fadeInLeft" : "animate__fadeInRight")}>
        <div className="flex flex-col lg:flex-row">
          {props.previewComponent}
          <div className="p-4 w-full">
            <div className="flex justify-between flex flex-col lg:flex-row">
              <div>
                <h2 className="text-xl">{props.title}</h2>
                <h3>{props.position}</h3>
              </div>
              <div className="flex lg:flex-col justify-between lg:text-end">
                <p>{props.framework}</p>
                <p>{props.languages}</p>
              </div>
            </div>
            <div className="pt-4">
              <p>{props.description}</p>
              <ul className="list-disc list-inside">
                {props.bullets.map((bullet: string, index: number) => <li key={index} className="indent-8">{bullet}</li>)}
              </ul>
            </div>
            <div className="pt-4 flex gap-8 justify-center">
              {
                props.links.map((link, index: number) => <ContactButton key={index} imageSource={link.iconSrc} animationDelay={0} size={50} address={link.linkSrc} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectEntry;