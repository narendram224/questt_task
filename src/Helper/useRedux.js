import { useDispatch, useSelector } from "react-redux"

const useRedux = (selectedState='') => {
  const state = useSelector(state=>state[selectedState])
  const dispatch = useDispatch()
  return [state,dispatch]
}

export default useRedux