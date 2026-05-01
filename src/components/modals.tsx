'use client'

import { useState } from 'react'
import { Modal, Badge, Button, Avatar } from '@/components/ui'

export interface EntityDetailModalProps {
  item: Record<string, unknown> | null
  open: boolean
  onClose: () => void
  title: string
}

export function EntityDetailModal({ item, open, onClose, title }: EntityDetailModalProps) {
  if (!item) return null

  const handleClose = () => {
    onClose()
  }

  const handleApprove = () => {
    console.log('Approve click')
    onClose()
  }

  const handleArchive = () => {
    console.log('Archive click')
    onClose()
  }

  const handleDelete = () => {
    console.log('Delete click')
    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <h2 className="text-zinc-900 font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(item).map(([key, value]) => (
          <div key={key} className="text-zinc-600">
            <span className="text-zinc-400">{key}</span>
            <span className="text-zinc-600">{value}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Button type="button" variant="primary" onClick={handleApprove}>
          Approve
        </Button>
        <Button type="button" variant="secondary" onClick={handleArchive}>
          Archive
        </Button>
        <Button type="button" variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      {item.status && (
        <Badge variant="info" className="mt-4">
          Status: {item.status}
        </Badge>
      )}
    </Modal>
  )
}

export interface ConfirmModalProps {
  open: boolean
  onClose: () => void
  title: string
  message: string
  onConfirm: () => void
  confirmLabel?: string
  variant?: 'danger' | 'info'
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: ConfirmModalProps) {
  const handleClose = () => {
    onClose()
  }

  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <h2 className="text-zinc-900 font-bold mb-4">{title}</h2>
      <p className="text-zinc-600">{message}</p>
      <div className="flex justify-end mt-4">
        <Button type="button" variant={variant === 'danger' ? 'danger' : 'primary'} onClick={handleConfirm}>
          {confirmLabel}
        </Button>
        <Button type="button" variant="ghost" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

export interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  items: Array<{ label: string; href: string; icon?: React.ReactNode; description?: string }>
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSelect = (item: { label: string; href: string; icon?: React.ReactNode; description?: string }) => {
    window.location.href = item.href
  }

  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-zinc-900 font-bold mb-4">Command Palette</h2>
      <Input
        label="Search"
        type="text"
        value={search}
        onChange={handleSearch}
        icon={<FiLoader />}
      />
      <ul className="list-none p-0 m-0">
        {filteredItems.map((item) => (
          <li key={item.label} className="py-2 hover:bg-zinc-100">
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleSelect(item)
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  )
}