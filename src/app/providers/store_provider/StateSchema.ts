import { CounterSchema } from "@/entities/counter/model/types/CounterSchema";
import { AuthSchema } from "@/features/admin/models/types/AuthSchema";

export interface StateSchema {
  counter: CounterSchema;
  auth: AuthSchema;
}
