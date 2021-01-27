import { Notyf } from 'notyf'
import { themeColors } from '/@src/composition/state/themeColors'

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
    successToast: () => {
      notyf.success('Your changes have been successfully saved!')
    },
    errorToast: () => {
      notyf.error('Looks like something went wrong')
    },
    infoToast: () => {
      notyf.open({
        type: 'info',
        message: 'This is some useful information that you might need.',
      })
    },
    warningToast: () => {
      notyf.open({
        type: 'warning',
        message: 'Please be careful when driving back to home.',
      })
    },
    primaryToast: () => {
      notyf.open({
        type: 'primary',
        message: 'Please be careful when driving back to home.',
      })
    },
    purpleToast: () => {
      notyf.open({
        type: 'purple',
        message: 'This is a nice looking purple toast notification.',
      })
    },
    blueToast: () => {
      notyf.open({
        type: 'blue',
        message: 'This is a nice looking blue toast notification.',
      })
    },
    greenToast: () => {
      notyf.open({
        type: 'green',
        message: 'This is a nice looking green toast notification.',
      })
    },
    orangeToast: () => {
      notyf.open({
        type: 'orange',
        message: 'This is a nice looking orange toast notification.',
      })
    },
  }
}
