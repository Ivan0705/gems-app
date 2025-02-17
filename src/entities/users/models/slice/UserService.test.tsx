import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { userAPI } from "./UserService";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import createFetchMock from "vitest-fetch-mock";
import { urlWithParams, userId, users } from "@/shared/api/api";

const fetch = createFetchMock(vi);
fetch.enableMocks();

const Wrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  return wrapperRouterProviderForTest(children);
};
const refetch = () => {};
const data = {};
const id = 1;
describe("UserService", async () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test("Test UserAPI fetchAllUsers", () => {
    const obj = {
      current: {
        status: "pending",
        endpointName: "fetchAllUsers",
        requestId: "9owMUZgOw8KDaeAMy7Ma4",
        originalArgs: 10,
        startedTimeStamp: 1730888822822,
        isUninitialized: false,
        isLoading: true,
        isSuccess: false,
        isError: false,
        data: undefined,
        currentData: undefined,
        isFetching: true,
        refetch: refetch(),
      },
    };

    const { result } = renderHook(() => userAPI.useFetchAllUsersQuery(10), {
      wrapper: Wrapper,
    });
    expect(result.current).not.toMatchObject(obj);
    expect(result.current.isSuccess).toBe(false);
  });

  beforeEach(() => {
    const url = urlWithParams(users);

    fetch.doMockOnceIf(url, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      }),
    );
  });
  test("Test userAPI fetchUserById", () => {
    const { result } = renderHook(() => userAPI.useFetchUserByIdQuery(id), {
      wrapper: Wrapper,
    });
    console.log("Result: ", result);

    setTimeout(async () => {
      expect(result.current.status).toBe("pending");
    }, 100);
  });
  beforeEach(() => {
    const url = urlWithParams(userId(id));

    fetch.doMockOnceIf(url, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      }),
    );
  });
});
