import { Notyf } from 'notyf'
import { themeColors } from '/@src/utils/themeColors'

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'bottom',
  },
  types: [
    {
      type: 'warning',
      background: themeColors.warning,
      icon: {
        className: 'fas fa-hand-paper',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'info',
      background: themeColors.info,
      icon: {
        className: 'fas fa-info-circle',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'primary',
      background: themeColors.primary,
      icon: {
        className: 'fas fa-car-crash',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'accent',
      background: themeColors.accent,
      icon: {
        className: 'fas fa-car-crash',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'purple',
      background: themeColors.purple,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'blue',
      background: themeColors.blue,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'green',
      background: themeColors.green,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
    {
      type: 'orange',
      background: themeColors.orange,
      icon: {
        className: 'fas fa-check',
        tagName: 'i',
        text: '',
      },
    },
  ],
})

export default function useNotyf() {
  return {
    success: (message: string) => {
      notyf.success(message)
    },
    error: (message: string) => {
      notyf.error(message)
    },
    info: (message: string) => {
      notyf.open({
        type: 'info',
        message,
      })
    },
    warning: (message: string) => {
      notyf.open({
        type: 'warning',
        message,
      })
    },
    primary: (message: string) => {
      notyf.open({
        type: 'primary',
        message,
      })
    },
    purple: (message: string) => {
      notyf.open({
        type: 'purple',
        message,
      })
    },
    blue: (message: string) => {
      notyf.open({
        type: 'blue',
        message,
      })
    },
    green: (message: string) => {
      notyf.open({
        type: 'green',
        message,
      })
    },
    orange: (message: string) => {
      notyf.open({
        type: 'orange',
        message,
      })
    },
  }
}
