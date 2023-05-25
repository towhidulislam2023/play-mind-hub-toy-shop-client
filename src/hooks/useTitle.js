import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Play Mind`
    }, [title])
}
export default useTitle