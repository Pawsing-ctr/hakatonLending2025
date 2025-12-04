import CaseSVG from "../assets/WhyUsSectionSVG/CaseSVG";
import ProtectionSVG from "../assets/WhyUsSectionSVG/ProtectionSVG";
import TagSVGsvg from "../assets/WhyUsSectionSVG/TagSVG";
import TimeSVG from "../assets/WhyUsSectionSVG/TimeSVG";
import type { IFeaturesData } from "../types";

export const featuresData: IFeaturesData[] = [
  {
    id: 1,
    title: "Автоматизация",
    description: "Наш сервис полностью исключает ручную работу, хаос и ошибки.",
    icon: <CaseSVG />,
  },
  {
    id: 2,
    title: "Экономия Времени",
    description: "Меньше отвлечений, и выше продуктивность всей компании.",
    icon: <TagSVGsvg />,
  },
  {
    id: 3,
    title: "Точность",
    description: "Строго вовремя, без задержек и путаницы.",
    icon: <TimeSVG />,
  },
  {
    id: 4,
    title: "Проверенные Рестораны",
    description:
      "Мы работаем только с лучшими и проверенными поставщиками питания.",
    icon: <ProtectionSVG />,
  },
];
