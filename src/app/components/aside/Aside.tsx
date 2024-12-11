import { Moon, Task } from '@/icons';

export function Aside() {
  return (
    <aside className="flex flex-col justify-between w-[250px] h-screen px-4 py-4 border-r-2 border-zinc-300">
      <header className="flex items-center gap-2">
        <span>
          <Task className="w-8 h-8" />
        </span>
        <h1 className="text-xl font-semibold text-black">Task Manager</h1>
      </header>

      <footer className="flex items-center w-full gap-2">
        <span>
          <Moon className="w-6 h-6" />
        </span>
        <h4 className="text-sm font-semibold">Change theme</h4>
      </footer>
    </aside>
  );
}
