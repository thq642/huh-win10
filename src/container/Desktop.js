import Taskbar from "./Taskbar";
import NotePad from "../components/Apps/NotePad";
import Chrome from "../components/Apps/Chrome";
import Settings from "../components/Apps/Settings";
import Krunker from "../components/Apps/Krunker";
import Minecraft from "../components/Apps/Minecraft";
import Anime from "../components/Apps/Anime";
import Manga from "../components/Apps/Manga";
import useStore from "../store";
import Icons from "./Icons";
import MenuRightClick from "./MenuRightClick";
import TaskbarRightMenu from "./TaskbarRightMenu";
import Nightlight from "../components/Nightlight";
import Brightness from "../components/Brightness";
import VolumeAdjust from "./VolumeAdjust";
import Internet from "./Internet";
import Language from "./Language";
import Battery from "./Battery";
import CalendarBar from "./Calendar";

import wpp0 from "../assets/windows_wallpaper/img0.jpg";
import wpp1 from "../assets/windows_wallpaper/img1.jpg";
import wpp2 from "../assets/windows_wallpaper/img2.jpg";
import wpp3 from "../assets/windows_wallpaper/img3.jpg";
import wpp4 from "../assets/windows_wallpaper/img4.jpg";

const wppArr = [wpp0, wpp1, wpp2, wpp3, wpp4];

const Desktop = () => {
  const {
    wallpaper,
    BColor,
    NotePadO,
    ChromeO,
    SettingsO,
    KrunkerO,
    MinecraftO,
    AnimeO,
    MangaO,
  } = useStore();

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 select-none bg-cover bg-center "
      style={{
        backgroundColor: BColor,
        backgroundImage: `url(${wppArr[wallpaper]})`,
      }}
    >
      {NotePadO ? <NotePad /> : false}
      {ChromeO ? <Chrome /> : false}
      {SettingsO ? <Settings /> : false}
      {KrunkerO ? <Krunker /> : false}
      {MinecraftO ? <Minecraft /> : false}
      {AnimeO ? <Anime /> : false}
      {MangaO ? <Manga /> : false}
      <CalendarBar />
      <Battery />
      <Language />
      <Internet />
      <VolumeAdjust />
      <Nightlight />
      <Brightness />
      <Icons />
      <Taskbar />
      <MenuRightClick />
      <TaskbarRightMenu />
      <div className="desktop fixed top-0 bottom-0 left-0 right-0 -z-[20]"></div>
    </div>
  );
};

export default Desktop;
