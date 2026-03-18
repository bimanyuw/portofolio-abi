import LensSwitch from "./LensSwitch";
import { Lens } from "@/types/portfolio";

type Props = {
  lens: Lens;
  setLens: (value: Lens) => void;
  isCreative: boolean;
};

export default function Navbar({ lens, setLens, isCreative }: Props) {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto w-[min(1200px,calc(100%-24px))]">
        <nav className="glass grid grid-cols-[1fr_auto_1fr] items-center rounded-full px-5 py-3 md:px-6">
          <div className="justify-self-start">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">
              Portfolio
            </p>
            <p className="text-xl font-semibold leading-none md:text-2xl">Abi</p>
          </div>

          <div className="hidden md:block justify-self-center">
            <div className="flex items-center gap-7 text-sm">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#experience" className="nav-link">
                Experience
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden lg:block justify-self-end">
            <LensSwitch
              lens={lens}
              setLens={setLens}
              isCreative={isCreative}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}