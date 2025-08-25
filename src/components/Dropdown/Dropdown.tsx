import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Dropdown.module.scss';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = 'Select…',
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (opt: DropdownOption) => {
    setSelected(opt);
    onSelect(opt.value);
    setOpen(false);
  };

  return (
    <div ref={ref} className={clsx(styles.dropdown, className)}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
      >
        {selected?.label ?? placeholder}
        <span className={styles.chevron} />
      </button>

      {open && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={clsx(
                styles.item,
                selected?.value === opt.value && styles.active
              )}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
