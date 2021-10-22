export default {
  rules: {
    phone: ({ value }) => {
      const isPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      return Promise.resolve(value === '' || isPhone.test(value))
    }
  },
  classes: {
    outer: 'mb-4',
    wrapper (context) {
      switch (context.classification) {
        case 'box':
          return 'flex'
        default:
          return ''
      }
    },
    input (context) {
      switch (context.classification) {
        case 'box':
          return 'mr-1'
        default:
          return 'px-3 py-2 mb-1 border border-gray-400 rounded outline-none w-full'
      }
    },
    label: 'font-medium text-sm',
    error: 'mb-1 text-red-700 text-xs '
  }
}
