import Container from "./components/Container";
import Field from "./components/Field";

export default function Home() {
  return (
    <section className="h-screen min-h-[600px] bg-slate-700 py-12">
      <div className="w-full h-full max-w-screen-lg mx-auto flex flex-col items-center">
        <h2 className="pt-12 text-xl sm:text-3xl font-semibold text-white">
          Sistema de Gestão de Finanças
        </h2>
        <Container />
        <div className="flex w-full pt-12 justify-center lg:justify-start lg:pt-0">
          <Field />
        </div>
      </div>
    </section>
  );
}
