# devdocs.runProject Documentation

## Brief Description
`devdocs.runProject` is a command that runs the project associated with the current workspace in Visual Studio Code.

## Usage
This command can be executed from the VS Code command palette or through a keyboard shortcut. It creates a new terminal and runs the project using a predefined npm script.

## Parameters
This command does not accept any parameters.

## Return Value
This command does not return a value. It executes an action within VS Code.

## Examples

1. Running the project from the command palette:
   ```
   1. Open the command palette (Ctrl+Shift+P or Cmd+Shift+P)
   2. Type "Dev-docs: Run Project"
   3. Press Enter to execute the command
   ```

2. Using a custom keybinding:
   ```json
   {
     "key": "ctrl+alt+r",
     "command": "devdocs.runProject"
   }
   ```
   Add this to your `keybindings.json` file in VS Code, then use Ctrl+Alt+R to run the project.

## Notes or Considerations

- This command assumes that your project can be started with the npm script `npm run start -- --host 0.0.0.0`.
- Ensure that your `package.json` file has a `start` script defined.
- The command creates a new terminal named "My Custom Terminal" for running the project.
- If the project is already running in a terminal, executing this command will create a new terminal instance.
- This command is particularly useful for projects that need to be run on a specific host (0.0.0.0) for development or testing purposes.
- If your project requires a different start command, you may need to modify the extension or use a custom task instead.