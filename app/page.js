import BorderAnimationBtn from "./components/borderAnimationBtn/BorderAnimationBtn";
import ImageAnimation from "./components/imageAnimation/ImageAnimation";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  text-white">
      <BorderAnimationBtn />
      <ImageAnimation />
    </main>
  );
}
