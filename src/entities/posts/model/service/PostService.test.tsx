import { postAPI } from "./PostService";
import { renderHook, waitFor } from "@testing-library/react";
import { wrapperRouterProviderForTest } from "../../../../shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { ReactNode } from "react";
import { posts, urlWithParams } from "../../../../shared/api/api";
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";
const fetch = createFetchMock(vi);
fetch.enableMocks();

const data = {};

const Wrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  return wrapperRouterProviderForTest(children);
};
function refetch() {
  console.log("Hello");
}
describe("PostService", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("Test PostAPI fetchAllPosts", async () => {
    const obj = {
      current: {
        currentData: undefined,
        data: undefined,
        endpointName: "fetchAllPosts",
        isError: false,
        isFetching: true,
        isLoading: true,
        isSuccess: false,
        isUninitialized: false,
        originalArgs: 5,
        refetch: () => refetch,
        requestId: "L5F3gjr1fpwDCQqI0MM0Z",
        startedTimeStamp: 1730882090973,
        status: "pending",
      },
    };

    const { result } = renderHook(() => postAPI.useFetchAllPostsQuery(5), {
      wrapper: Wrapper,
    });

    expect(result).not.toMatchObject(obj);
    expect(result.current.endpointName).toMatchObject(obj.current.endpointName);

    setTimeout(async () => {
      await waitFor(() => expect(result.current.isSuccess).not.toBe(true));
    }, 500);
  });

  beforeEach(() => {
    const url = urlWithParams(posts);

    fetch.doMockOnceIf(url, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      }),
    );
  });
});
