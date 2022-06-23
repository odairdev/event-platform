import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image,
} from "phosphor-react";
import { Player, Youtube, DefaultUi } from "@vime/react";

import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}
`

interface VideoProps {
  lessonSlug: string
}

interface QueryProps {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    }
  }
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<QueryProps>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: lessonSlug
    },
    fetchPolicy: "no-cache"
  })

  console.log(data)

  if(!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} key={data?.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data?.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src={data.lesson.teacher.avatarURL}
                alt="avatar"
                className="rounded-full w-16 h-16 border-2 border-blue-500"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-sm text-gray-200 block">
                {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="py-4 px-6 text-sm font-medium rounded bg-green-500 flex items-center justify-center gap-2 hover:bg-green-700 transition"
            >
              <DiscordLogo size={24} /> COMUNIDADE NO DISCORD
            </a>
            <a
              href=""
              className="py-4 px-6 text-sm text-blue-500 rounded font-medium bg-transparent border border-blue-500 flex items-center justify-center gap-2 transition hover:bg-blue-500 hover:text-black"
            >
              <Lightning size={24} /> ACESSE O DESAFIO
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center h-full p-6 bg-green-700">
              <FileArrowDown size={39} className="" />
            </div>
            <div className="leading-relaxed p-6">
              <strong className="font-bold text-2xl block">
                Material Complementar
              </strong>
              <span className="text-sm text-gray-200 block mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </span>
            </div>
            <div className="flex items-center pr-6">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="flex flex items-center p-6 bg-green-700">
              <Image size={39}/>
            </div>
            <div className="leading-relaxed p-6">
              <strong className="font-bold text-2xl block">
                Material Complementar
              </strong>
              <span className="text-sm text-gray-200 block mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </span>
            </div>
            <div className="flex items-center pr-6">
              <CaretRight size={24} className="text-blue-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
