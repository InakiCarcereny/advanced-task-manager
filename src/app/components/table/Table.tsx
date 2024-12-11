import { Plus } from '@/icons';
import { TH } from '@/lib';

export function Table() {
  return (
    <table className="w-full h-full">
      <thead>
        <tr className="flex items-center justify-between w-full gap-12">
          {TH.map((th) => (
            <th
              key={th.name}
              className="flex items-center justify-between w-full"
            >
              {th.name}
              <button className="bg-white rounded-full p-1 hover:text-emerald-400 duration-200">
                <Plus />
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
