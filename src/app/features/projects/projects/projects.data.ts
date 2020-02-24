export interface Project {
  title: string;
  description?: string;
  backgroundUrl?: string;
  source?: string;
  sourceIcon?: string;
  sourceUrl: string;
  show?: boolean;
}

export const projects: Project [] = [
  {
    title: "Catan",
    description: "Custom laser cut Settlers of Catan",
    backgroundUrl: "https://assets.evanparizot.com/projects/catan.jpg",
    source: "Imgur",
    sourceUrl: "https://imgur.com/a/GNPO1"
  },
  {
    title: "Cutting Board",
    description: "3d cutting board using cherry, walnut, and maple",
    backgroundUrl: "https://assets.evanparizot.com/projects/3DcuttingBoard.jpg",
    source: "Imgur",
    sourceUrl: "https://imgur.com/a/9ZtARZi"
  },
  {
    title: "Wordclock",
    description: "PCB and code for prototype wordclock",
    backgroundUrl: "https://assets.evanparizot.com/projects/wordclock-3d.png",
    source: "Github",
    sourceIcon: "github",
    sourceUrl: "https://github.com/evanparizot/wordclock"
  },
  {
    title: "Toolboxes",
    description: "Japanese style toolboxes made out of walnut, maple, and cherry",
    backgroundUrl: "https://assets.evanparizot.com/projects/japanese_toolbox.jpg",
    source: "Imgur",
    sourceUrl: "https://imgur.com/a/yiolIla"
  },
  {
    title: "Topographic Map",
    description: "Laser cut topographic map of Austin, Texas using public GIS information",
    backgroundUrl: "https://assets.evanparizot.com/projects/austin-map.jpg",
    source: "Imgur",
    sourceUrl: "https://imgur.com/a/pkqeI0n"
  },
  {
    title: "Website",
    description: "",
    backgroundUrl: "https://assets.evanparizot.com/projects/website.jpg",
    source: "Github",
    sourceIcon: "github",
    sourceUrl: "https://github.com/evanparizot/website"
  },
  {
    title: "PC",
    description: "Hardline, watercooled PC",
    backgroundUrl: "https://assets.evanparizot.com/projects/watercooledPC.jpg",
    source: "Imgur",
    sourceIcon: "",
    sourceUrl: "https://imgur.com/a/PeQ0E"
  },
  {
    title: "JBL Speakers",
    description: "Restored, vintage JBL L26 Century Speakers",
    backgroundUrl: "https://assets.evanparizot.com/projects/jbl_speakers.jpg",
    source: "Imgur",
    sourceIcon: "",
    sourceUrl: "https://imgur.com/a/pdVpFP3"
  },
  {
    title: "Plant Stands",
    description: "Simple plants stands with mortise and tenon joints. Made out of cherry.",
    backgroundUrl: "https://assets.evanparizot.com/projects/plant-stands.jpg",
    source: "Imgur",
    sourceIcon: "",
    sourceUrl: "https://imgur.com/a/DSSKPzK"
  }
  
]