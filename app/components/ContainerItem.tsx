type Item = {
  nome: string;
  symbol: React.ReactNode;
  valor?: any;
};

export default function ContainerItem({ nome, symbol, valor }: Item) {
  return (
    <div className="w-[250px] h-[150px] py-6 bg-white rounded-xl flex flex-col">
      <div className="flex items-center justify-evenly">
        <span className="text-2xl">{nome}</span>
        {symbol}
      </div>
      <div className="h-16   flex items-center justify-center text-2xl">
        {`R$: ${valor}`}
      </div>
    </div>
  );
}
