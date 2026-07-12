import type { Task } from "../model";
import { baseApi } from "shared/api";

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
      transformResponse: (response: Task[]) => response,
      providesTags: ["Tasks"],
    }),
  }),
});
