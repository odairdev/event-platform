import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useParams } from "react-router-dom";
import { MenuContextProvider } from "../contexts/MenuContext";

export function Event() {
  const { slug } = useParams<string>();

  return (
    <div className="flex flex-col min-h-screen">
      <MenuContextProvider>
        <Header />
        <main className="flex flex-1 relative">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
          <Sidebar />
        </main>
      </MenuContextProvider>
    </div>
  );
}
