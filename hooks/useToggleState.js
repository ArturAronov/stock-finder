import useSWR from 'swr'

const useToggleState = (state) => {
  const { data: toggle, mutate: mutateToggle } = useSWR([state])

  return {
    toggle,
    mutateToggle
  }
}

export default useToggleState
