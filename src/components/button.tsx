import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { ClassValue } from 'clsx';
import React from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export default function Button({
  children,
  onClick,
  className,
  disabled,
  type,
}: Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}>) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'shadow-md',
        'rounded',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// import clsx from 'clsx';
// import cn from '../../utils/cn';
// import React from 'react';

// export default function Button({
//   children,
//   onClick,
//   className,
//   disabled,
// }: Readonly<{
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }>) {
//   return (
//     <button
//       onClick={onClick}
//       className={clsx(
//         'bg-blue-500',
//         'hover:bg-blue-700',
//         'text-white',
//         'font-bold',
//         'py-2',
//         'px-4',
//         'shadow-md',
//         'rounded',
//         className
//       )}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// }

// import cn from '../../utils/cn';
// import React from 'react';

// export default function Container(props: React.HTMLProps<HTMLDivElement>) {
//   return <div {...props} className={cn('', props.className)} />;
// }
