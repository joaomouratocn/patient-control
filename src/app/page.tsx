import { Container } from "@/components/container";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";


export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-10 mt-5 items-center justify-center sm:flex-row">
        <Link
          className="text-3xl bg-[var(--accent-green)] flex flex-col gap-1 items-center p-5 text-white rounded-2xl cursor-pointer hover:bg-[var(--accent-green-hover)] duration-300"
          href="/register"
        >
          Cadastrar
          <IoPersonAddOutline size={48} />
        </Link>
        <Link className="text-3xl bg-[var(--accent-orange)] flex flex-col gap-1 items-center p-5 text-white rounded-2xl cursor-pointer hover:bg-[var(--accent-orange-hover)] duration-300"
          href="/consult"
        >
          Consultar
          <IoIosSearch size={48} />
        </Link>
      </div>
    </Container >
  );
}
