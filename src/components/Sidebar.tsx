import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { useBurger } from "../hooks/useBurger";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  const { isBurgerOpen } = useBurger()

  return (
    <aside className={`${isBurgerOpen ? 'block absolute top-0 right-0 w-screen h-full z-[999]' : 'hidden'} lg:block w-[348px] bg-gray-700 p-6 border-l border-gray-600`}>
      <span className="block font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
