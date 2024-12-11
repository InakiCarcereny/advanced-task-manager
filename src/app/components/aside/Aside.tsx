'use client';

import { Moon, Task } from '@/icons';
import { useState } from 'react';

export function Aside() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <aside
      className={`flex flex-col justify-between h-screen px-4 py-4 duration-200 ${open ? 'w-[250px]' : 'w-[100px]'}`}
    >
      <header className="flex items-center gap-2">
        <span onClick={handleOpen}>
          <Task className="w-8 h-8" />
        </span>
        <h1 className="text-xl font-semibold text-black">Task Manager</h1>
      </header>

      <footer className="flex items-center w-full gap-2">
        <span>
          <Moon className="w-6 h-6" />
        </span>
        <h4 className={`text-sm font-semibold ${open ? 'block' : 'hidden'}`}>
          Change theme
        </h4>
      </footer>
    </aside>
  );
}
