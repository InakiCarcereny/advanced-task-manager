import { Table } from '@/components';

export function Main() {
  return (
    <main className="h-screen flex-grow bg-zinc-200 px-4 py-4 flex flex-col gap-10">
      <header className="flex items-center justify-between w-full">
        <h2 className="text-3xl font-semibold text-black">My Tasks</h2>
        <input
          type="search"
          className="bg-transparent border border-zinc-300 text-sm rounded-[4px] px-2 py-1 max-w-[250px] w-full focus:outline-none"
        />
      </header>

      <Table />
    </main>
  );
}
