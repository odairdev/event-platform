import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const slugParam = useParams<{ slug: string}>().slug

  const isActiveLesson = slugParam === slug

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted} </span>
      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={`text-sm text-blue-500 font-medium flex gap-2 items-center ${isActiveLesson ? 'text-white' : ''}`}>
              <CheckCircle size={20} /> Conteudo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
              <Lock size={20} /> Em breve
            </span>
          )}
          <span className={`text-xs text-white rounded px-2 py-[0.125rem] border ${isActiveLesson ? 'border-white' : 'border-green-300'} font-bold`}>
            {type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>

        <strong className={`${isActiveLesson ? 'text-white' : 'text-gray-200'} mt-5 block `}>{title}</strong>
      </div>
    </Link>
  );
}
