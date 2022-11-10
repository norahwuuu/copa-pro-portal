import { queryLogin } from "@/services/login";
import "@testing-library/jest-dom/extend-expect";
// import { act, render, renderHook, screen } from "@testing-library/react";
// console.log(act, renderHook, screen, render);
test("initial load", async () => {
  return;
});
test("Should dispaly error when field is empty", async () => {
  return;
});
test("Should dispaly error when email is invalid format", async () => {
  return;
});
test("Should able to submit form with valid username and password", async () => {
  expect.assertions(1);
  const data = await queryLogin({
    username: "1114028542@qq.com",
    password: "123",
  });
  return;
});
