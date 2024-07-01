import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import HeroHeader from './../components/HeroHeader/index';
import ProdutosContainer from '../components/produtosContainer/index';
import NovidadesContainer from './../components/NovidadesContainer/index';
import Categorias from './../components/categorias/index';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroHeader />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
        </div>
        <Categorias />
        <ProdutosContainer />
        <NovidadesContainer />
      </section>
    </DefaultLayout>
  );
}
