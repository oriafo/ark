import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren, type ComponentWithProps } from '../utils'
import { useRangeSliderContext } from './range-slider-context'

export type RangeSliderControlProps = HTMLArkProps<'div'>

export const RangeSliderControl: ComponentWithProps<RangeSliderControlProps> = defineComponent({
  name: 'RangeSliderControl',
  setup(_, { slots, attrs }) {
    const api = useRangeSliderContext()

    return () => (
      <ark.div {...api.value.controlProps} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.div>
    )
  },
})
