
import DefaultLayout from "@/layouts/default";
import HeroHeader from './../components/HeroHeader/index';
import ProdutosContainer from '../components/produtosContainer/index';
import NovidadesContainer from './../components/NovidadesContainer/index';
import Categorias from '../components/Categorias/index';
import CustomSkeleton from './../components/skeleton/index';

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
