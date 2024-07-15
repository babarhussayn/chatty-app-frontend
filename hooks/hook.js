const { useEffect, useState } = require("react");
const { toast } = require("react-toastify");



const useErrors=(errors=[])=>{
useEffect(()=>{
    errors.forEach(({isError,error,fallback})=>{
        if(isError){
            if(fallback) fallback();
            else toast.error(error?.data?.message || 'error')
        }
    });
},[errors]);
}


// const useAsyncMutation=(mutationHook)=>{

//     const[isLoading,setIsLoading]=useState(false);
//     const [data,setData]=useState(null)

//     const [mutate]=mutationHook();
//     const executeMutation=async(toastMessage,...args)=>{
//         setIsLoading(true);

//         const toastId=toast.loading(toastMessage || 'loading......');

      

//         finally{
//             setIsLoading(false);
//         }
//     };
//     return[executeMutation,isLoading,data]

// }
export {useErrors};