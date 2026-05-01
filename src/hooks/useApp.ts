'use client'

import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(initial)

  useEffect(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      setValue(JSON.parse(storedValue))
    }
  }, [key])

  const updateValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, updateValue]
}

export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): { filtered: T[]; search: string; setSearch: (s: string) => void; status: string; setStatus: (s: string) => void } {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')

  const filteredItems = items.filter((item) => {
    const searchMatches = fields.some((field) => {
      const fieldValue = item[field]
      return fieldValue.toString().toLowerCase().includes(search.toLowerCase())
    })
    const statusMatches = status === '' || item.status === status
    return searchMatches && statusMatches
  })

  return {
    filtered: filteredItems,
    search,
    setSearch,
    status,
    setStatus,
  }
}

export function useModal<T = unknown>(): {
  isOpen: boolean
  open: (item?: T) => void
  close: () => void
  activeItem: T | null
} {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<T | null>(null)

  const open = (item?: T) => {
    setIsOpen(true)
    setActiveItem(item)
  }

  const close = () => {
    setIsOpen(false)
    setActiveItem(null)
  }

  return { isOpen, open, close, activeItem }
}

export function useDemoToast(): {
  message: string
  type: 'success' | 'error' | 'info'
  visible: boolean
  show: (msg: string, type?: 'success' | 'error' | 'info') => void
} {
  const [message, setMessage] = useState('')
  const [type, setType] = useState<'success' | 'error' | 'info'>('info')
  const [visible, setVisible] = useState(false)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const show = (msg: string, type?: 'success' | 'error' | 'info') => {
    if (timer) {
      clearTimeout(timer)
    }
    setMessage(msg)
    setType(type || 'info')
    setVisible(true)
    setTimer(setTimeout(() => {
      setVisible(false)
    }, 2500))
  }

  return { message, type, visible, show }
}