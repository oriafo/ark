import * as accordion from '@zag-js/accordion'
import { normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'

export const useAccordion = (props: Omit<accordion.Context, 'id'>) => {
  const { collapsible, dir, disabled, getRootNode, ids, multiple, onChange, value, ...htmlProps } =
    props
  const [state, send] = useMachine(
    accordion.machine({
      id: useId(),
      collapsible,
      dir,
      disabled,
      getRootNode,
      ids,
      multiple,
      onChange,
      value,
    }),
  )
  return { api: accordion.connect(state, send, normalizeProps), htmlProps }
}

export type UseAccordionReturn = ReturnType<typeof useAccordion>
