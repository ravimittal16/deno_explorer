import { bold, underline } from "./deps.ts";

export function getHelloWorld(_underline: boolean): string {
  return _underline ? underline(bold("Hello World")) : bold("Hello World");
}

console.log(getHelloWorld(true));
