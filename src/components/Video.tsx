import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image,
} from "phosphor-react";
import { Player, Youtube, DefaultUi } from "@vime/react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Footer } from "./Footer";
import { Dispatch, SetStateAction } from "react";

interface VideoProps {
  lessonSlug: string;  
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
    fetchPolicy: "no-cache",
  });


  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="xs:flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube
              videoId={data?.lesson.videoId}
              key={data?.lesson.videoId}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson.title}</h1>
            <p className="text-xs xs:text-base mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt="avatar"
                  className="rounded-full w-16 h-16 border-2 border-blue-500"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-lg xs:text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-sm text-gray-200 block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 text-left mx-auto">
            <a
              href=""
              className="py-4 px-6 text-sm font-medium rounded bg-green-500 flex items-center justify-center gap-2 hover:bg-green-700 transition "
            >
              <DiscordLogo size={24} className="" /> COMUNIDADE NO DISCORD
            </a>
            <a
              href=""
              className="py-4 px-6 text-sm text-blue-500 rounded font-medium bg-transparent border border-blue-500 flex items-center justify-center gap-2 transition hover:bg-blue-500 hover:text-black"
            >
              <Lightning size={24} className="" /> ACESSE O DESAFIO
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-rows-2 md:grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 xs:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center h-full p-6 bg-green-700">
              <FileArrowDown size={39} className="w-6 sm:w-[39px]"/>
            </div>
            <div className="leading-relaxed py-6">
              <strong className="font-bold text-lg xs:text-2xl block">
                Material Complementar
              </strong>
              <span className="text-xs xs:text-sm text-gray-200 block mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </span>
            </div>
            <div className=" flex items-center pr-6">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 xs:gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center p-6 bg-green-700">
              <Image size={39} className="w-6 sm:w-[39px]"/>
            </div>
            <div className="leading-relaxed py-6">
              <strong className="font-bold text-lg xs:text-2xl block">
                Wallpapers exclusivos
              </strong>
              <span className="text-xs xs:text-sm text-gray-200 block mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </span>
            </div>
            <div className="flex items-center pr-6">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
