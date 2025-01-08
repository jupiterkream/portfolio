import { defaultConfig } from '@formkit/vue'
// import { rootClasses } from './formkit.theme'
import { generateClasses } from '@formkit/themes'
import tailwindTheme from './formkit.tailwind'

export default defaultConfig({
  config: {
    classes: generateClasses(tailwindTheme)
  }
})
