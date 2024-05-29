export interface Props {
  name: string;
  time: [string, string][];
  menu: string[];
}

export default function MenuCard({ name, time, menu }: Props) {
  return (
    <div className="menu-card flex flex-col gap-4 p-4 bg-gray-200 rounded-2xl grow w-0 min-w-max">
      <div className="flex flex-row gap-2 w-max min-w-max">
        <span className="text-sm font-medium w-max">{name}</span>
        {time.map((time, index) => (
          <span key={index} className="text-sm font-normal w-max">
            {time[0]} ~ {time[1]}
          </span>
        ))}
      </div>
      <ul className="flex flex-col gap-1 w-max">
        {menu.map((menu, index) => (
          <li className="text-sm font-normal" key={index}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}
