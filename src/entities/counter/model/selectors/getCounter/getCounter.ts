import { StateSchema } from "@/app/providers/store_provider/StateSchema";

export const getCounter = (state: StateSchema) => state.counter;
