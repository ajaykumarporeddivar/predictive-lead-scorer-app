'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FiLoader } from 'lucide-react';

export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(...inputs);
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  href,
  className,
}: ButtonProps) {
  const classes = cn(
    'flex items-center justify-center rounded-lg',
    {
      'bg-zinc-900 text-white hover:bg-zinc-700': variant === 'primary',
      'bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-100':
        variant === 'secondary',
      'bg-transparent text-zinc-900 border border-zinc-200 hover:bg-zinc-100':
        variant === 'outline',
      'bg-transparent text-zinc-900 hover:text-zinc-700': variant === 'ghost',
      'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
    },
    {
      'py-2 px-4 text-sm': size === 'sm',
      'py-3 px-6 text-base': size === 'md',
      'py-4 px-8 text-lg': size === 'lg',
    },
    {
      'pointer-events-none opacity-60': loading || disabled,
    },
    className
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {loading ? <FiLoader className="animate-spin" /> : children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {loading ? <FiLoader className="animate-spin" /> : children}
    </button>
  );
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn('bg-white border border-zinc-200 rounded-xl shadow-sm', className)}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('border-b border-zinc-200 pb-4', className)}>{children}</div>;
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h2 className={cn('text-lg font-bold text-zinc-900', className)}>{children}</h2>
  );
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('pt-4', className)}>{children}</div>;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const classes = cn('flex items-center justify-center rounded-full py-1 px-2 text-xs', {
    'bg-zinc-100 text-zinc-900': variant === 'default',
    'bg-emerald-50 text-emerald-600': variant === 'success',
    'bg-amber-50 text-amber-600': variant === 'warning',
    'bg-red-50 text-red-600': variant === 'error',
    'bg-blue-50 text-blue-600': variant === 'info',
    'bg-purple-50 text-purple-600': variant === 'purple',
  });

  return <div className={classes}>{children}</div>;
}

export interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: 'text' | 'password';
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  icon,
  disabled,
  className,
}: InputProps) {
  const classes = cn(
    'block w-full rounded-lg border border-zinc-200 py-2 pl-10 text-sm text-zinc-900',
    {
      'bg-zinc-100': disabled,
    },
    className
  );

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-zinc-900">{label}</label>
      <div className="relative mt-1">
        {icon && (
          <div className="absolute left-4 top-1/2 -mt-2.5 flex items-center justify-center">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={classes}
        />
      </div>
      {error && <div className="mt-2 text-xs text-red-600">{error}</div>}
    </div>
  );
}

export interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={cn(
        'flex justify-center',
        className
      )}
    >
      <FiLoader className="animate-spin" />
    </div>
  );
}

export interface AvatarProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ name, size = 'md', className }: AvatarProps) {
  const initials = name.split(' ').map((word) => word[0]).join('');
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full',
        {
          'h-6 w-6 text-xs': size === 'xs',
          'h-8 w-8 text-sm': size === 'sm',
          'h-10 w-10 text-base': size === 'md',
          'h-12 w-12 text-lg': size === 'lg',
        },
        { backgroundColor: color },
        className
      )}
    >
      {initials}
    </div>
  );
}

export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  sparkline?: number[];
}

export function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  sparkline,
}: StatCardProps) {
  const changeClasses = cn({
    'text-emerald-600': changeType === 'up',
    'text-red-600': changeType === 'down',
    'text-zinc-500': changeType === 'neutral',
  });

  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-medium text-zinc-900">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon && <div className="mr-2">{icon}</div>}
          <div className="text-2xl font-bold text-zinc-900">{value}</div>
        </div>
        <div className={cn('text-sm', changeClasses)}>{change}</div>
      </div>
      {sparkline && (
        <div className="mt-4">
          <svg width={40} height={20} viewBox="0 0 40 20">
            <polyline
              points={sparkline
                .map((value, index) => `${index * 10} ${20 - value * 10}`)
                .join(' ')}
              stroke="#6366f1"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={cn(
          'bg-white rounded-2xl shadow-xl animate-slideup',
          {
            'max-w-xs': size === 'sm',
            'max-w-sm': size === 'md',
            'max-w-md': size === 'lg',
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4">
          <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
          <button className="text-zinc-500 hover:text-zinc-700" onClick={onClose}>
            <FiLoader className="animate-spin" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="rounded-lg bg-zinc-100 p-4">{icon}</div>
      <h3 className="mt-4 text-lg font-bold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export interface TableProps<T> {
  columns: Array<{ key: string; label: string; render?: (row: T) => React.ReactNode }>;
  data: T[];
  onRowClick?: (row: T) => void;
}

export function Table<T>({ columns, data, onRowClick }: TableProps<T>) {
  return (
    <table className="w-full table-auto">
      <thead className="bg-zinc-100">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="px-4 py-2 text-left text-sm font-medium text-zinc-900"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={cn('bg-white', {
              'hover:bg-zinc-50': onRowClick,
            })}
            onClick={() => onRowClick && onRowClick(row)}
          >
            {columns.map((column) => (
              <td
                key={column.key}
                className="px-4 py-2 text-sm text-zinc-600"
              >
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}