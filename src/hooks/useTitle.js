import { useEffect } from "react"

const useTitle = title =>{
useEffect(()=>{
    document.title= `${title}-Daragon News`;
},[title])

}

export default useTitle;