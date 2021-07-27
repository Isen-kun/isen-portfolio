import { WorkData } from "./data/work";
import Separator from "./Separator";
import WorkCard from "./WorkCard";

const Work = () => {
  const data = WorkData;

  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} key={item.dateJoining} />;
        })}
      </div>
    </div>
  );
};

export default Work;
