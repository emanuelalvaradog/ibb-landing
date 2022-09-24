import Link from "next/link";

export function RouteLinks() {
  return (
    <>
      <Link href="/oracion"> Oración</Link>
      <Link href="https://www.youtube.com/watch?v=WrBU72J2DmQ">Historia</Link>
      <Link href="https://m.youtube.com/c/IglesiaBautistaBethelOnline">
        Predicaciones
      </Link>
      <Link href="https://www.navidadenlasmontanas.com">
        Navidad en las montañas
      </Link>
    </>
  );
}
