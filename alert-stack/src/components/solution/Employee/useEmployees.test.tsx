import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useEmployees } from "./useEmployeesFixed";
import { testEmployees } from "./testingUtils";

var axiosMock = new MockAdapter(axios);

test("useEmployees hook", async () => {
  const testSearchTerm = "Donald";
  axiosMock
    .onGet("/employees", { params: { search: testSearchTerm } })
    .reply(200, testEmployees);

  const { result } = renderHook(() => useEmployees(testSearchTerm));
  expect(result.current.isLoading).toBe(true);
  expect(result.current.employees).toStrictEqual([]);
  await waitFor(() => expect(result.current.isLoading).toBe(false));
  expect(result.current.employees).toStrictEqual(testEmployees);
});
