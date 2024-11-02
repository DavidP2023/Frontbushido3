import { useQuery } from "@apollo/client"
import { GetProductQuery } from "../data/api/product_remote_data_source";

export const useGetProductQueryHook = () => {

    const {
        data, loading, error
    } = useQuery(GetProductQuery);

    return {
        data:data?.getProducts, loading, error
    }

}