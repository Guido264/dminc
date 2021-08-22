import { useTheme } from "./useTheme";
import { act, renderHook } from "@testing-library/react-hooks";

test("it should not throw an error", () => {
  renderHook(() => useTheme());
});

// test("initial theme should be light", () => {
//   const { result } = renderHook(() => useTheme());
//   expect(result.current.colorTheme).toBe("light");
// });

// test("it should change theme to dark", () => {
//   const { result } = renderHook(() => useTheme());

//   act(() => {
//     result.current.setColorTheme("dark");
//   });

//   expect(result.current.colorTheme).toBe("dark");
// });
