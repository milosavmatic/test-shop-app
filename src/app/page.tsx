import Slider from './components/homepage/Slider';


export interface Banner {
  image: string;
  title?: string;
  subtitle?: string;
  button?: string;
  url?: string;
}


export default function Home() {
  const banners: Banner[] = [
    {
      image: "/images/image_1.png",
      title: "Banner 1",
      subtitle: "Subtitle 1",
      button: "Button 1",
      url: "/",
    },
    {
      image: "/images/image_2.png",
      title: "Banner 2",
      subtitle: "Subtitle 2",
      button: "Button 2",
      url: "/",
    }
  ];

  return (
    <main className="">
      <Slider banners={banners} />
    </main>
  )
}
