import { runAppleScript } from "run-applescript";

/*export async function clickWordButton(button: { type: string; name: string; group: number; tab: string }) {
  await runAppleScript(`tell application "System Events"
        tell process "Word"
            set frontmost to true

            set tabs to tab group 1 of window 1
		    set active_tab to the first radio button of tabs whose value is equal to 1

            set tab to radio button "${button.tab}" of tabs
            if value of tab is equal to 0 then
                click tab
            end if
            click ${button.type} "${button.name}" of group ${button.group} of scroll area 1 of tab group 1 of window 1
            if name of active_tab is not equal to "${button.tab}" then
                click active_tab
            end if
        end tell
    end tell`);
}*/

export async function runWordCommand(input: string) {
  const command = `
    --TODO: check if word is running
    tell application "Microsoft Word"
        ${input}
    end tell
    `;

  await runAppleScript(command);
}
