import {useForm} from "react-hook-form"
import {addItemsRequest} from '../api/items'

function AddItemsPage() {
    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit(async(values)=>{
        const res = await addItemsRequest(values);
        console.log(res);
    })

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input
                 type="text" 
                 {...register("name",{required: true})}
                 className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                 placeholder="Nombre"
                />
                <input 
                 type="number" 
                 {...register("price",{required: true})}
                 className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                 placeholder="precio"
                />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default AddItemsPage