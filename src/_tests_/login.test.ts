import InputField from "@/components/InputField/inputField";
import "@testing-library/jest-dom/extend-expect";
import { act, render, renderHook, screen } from "@testing-library/react";
console.log(act, renderHook, screen, render);
test("initial load", async () => {
  render(InputField);
  return;
});
test("Should dispaly error when field is empty", async () => {
  return;
});
test("Should dispaly error when email is invalid format", async () => {
  return;
});
test("Should able to submit form with valid username and password", async () => {
  return;
});
