import { closeMainWindow } from "@raycast/api";
import { runWordCommand } from "./utils";

export default async () => {
  await closeMainWindow();
  await runWordCommand(`
    collapse range text object of selection direction collapse end
	  set myFN to make new footnote at active document with properties {text range: text object of selection}
	  set content of text object of myFN to ""
	  select text object of myFN
    `);
  return;
};
