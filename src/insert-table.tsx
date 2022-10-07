import { closeMainWindow } from "@raycast/api";
import { runWordCommand } from "./utils";

interface TableArguments {
  columns: string;
  rows: string;
}

export default async (props: { arguments?: TableArguments }) => {
  const { columns, rows } = props.arguments;

  // Todo: make default table size
  await closeMainWindow();
  await runWordCommand(`
    collapse range text object of selection direction collapse start
	  set oTable to make new table at character 1 of selection with properties {number of rows: ${rows}, number of columns: ${columns}}
	  set enable borders of border options of oTable to true
  `);
};
