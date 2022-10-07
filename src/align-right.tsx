import { closeMainWindow } from "@raycast/api";
import { runWordCommand } from "./utils";

export default async () => {
  await closeMainWindow();
  await runWordCommand("set alignment of every paragraph in selection to align paragraph right");
};
