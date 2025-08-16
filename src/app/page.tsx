import { Container } from "@/components/container";
import { PiSyringeBold } from "react-icons/pi";
import { BiSolidCapsule } from "react-icons/bi";
import Link from "next/link";


export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-10 mt-5 items-center justify-center sm:flex-row">
        <Link
          className="text-3xl bg-[var(--accent-green)] flex flex-col gap-1 items-center p-5 text-white rounded-2xl cursor-pointer hover:bg-[var(--accent-green-hover)] duration-300"
          href="/glargina"
        >
          Glargina
          <BiSolidCapsule size={48} />
        </Link>
        <Link className="text-3xl bg-[var(--accent-orange)] flex flex-col gap-1 items-center p-5 text-white rounded-2xl cursor-pointer hover:bg-[var(--accent-orange-hover)] duration-300"
          href="/flexpen"
        >
          FlexPen
          <PiSyringeBold size={48} />
        </Link>
      </div>
    </Container >
  );
}
