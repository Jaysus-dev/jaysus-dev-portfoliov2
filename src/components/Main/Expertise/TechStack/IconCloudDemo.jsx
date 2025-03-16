import { IconCloud } from "./IconCloud";
import AI from "../../../../assets/img/Adobe Illustrator.png";
import CSS from "../../../../assets/img/CSS3.png";
import Figma from "../../../../assets/img/Figma.png";
import Firebase from "../../../../assets/img/Firebase.png";
import dotGit from "../../../../assets/img/Git.png";
import Github from "../../../../assets/img/GitHub.png";
import Gitlab from "../../../../assets/img/GitLab.png";
import HTML from "../../../../assets/img/HTML5.png";
import JS from "../../../../assets/img/Javascript.png";
import NodeJs from "../../../../assets/img/Node.js.png";
import NPM from "../../../../assets/img/NPM.png";
import PHP from "../../../../assets/img/PHP.png";
import ReactJs from "../../../../assets/img/React.png";
import StackOverflow from "../../../../assets/img/Stack Overflow.png";
import Tailwindcss from "../../../../assets/img/Tailwind CSS.png";
import Vercel from "../../../../assets/img/Vercel.png";
import VScode from "../../../../assets/img/Visual Studio Code.png";
import Vite from "../../../../assets/img/Vite.js.png";
import Wordpress from "../../../../assets/img/Wordpress.png";
import PS from "../../../../assets/img/Adobe Photoshop.png";

const images = [
  AI,
  Tailwindcss,
  Figma,
  Github,
  dotGit,
  Firebase,
  HTML,
  Gitlab,
  PHP,
  NodeJs,
  NPM,
  JS,
  PS,
  StackOverflow,
  CSS,
  Vercel,
  VScode,
  Vite,
  Wordpress,
  ReactJs,
];

export default function IconCloudDemo() {
  return (
    <div className="icon-cloud">
      <IconCloud images={images} />
    </div>
  );
}
