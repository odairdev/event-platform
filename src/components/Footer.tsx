import { RocketseatLogo } from "./RocketSeatLogo";

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center md:justify-between gap-5 border-t border-gray-500 text-gray-300 text-sm xs:text-base mb-4 p-4">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <RocketseatLogo />
        <p>Rocketseat - Todos os direitos reservados</p>
      </div>
      <p className="block">Políticas de privacidade</p>
    </footer>
  );
}
