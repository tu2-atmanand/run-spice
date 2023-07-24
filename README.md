# Run Spice
Spice code Runner Extension for Visual Studio Code

![Spice Runner Logo](src/RunSpiceLogo.png)

The Run Spice extension for Visual Studio Code provides a convenient way to execute SPICE programs directly from the editor. It is designed to ease the process of running SPICE simulations without the need to remember complex command-line invocations. Whether you are a seasoned SPICE user or a beginner exploring circuit simulations, Spice Runner streamlines your workflow and enhances productivity. It provides an button at the bottom right corner in the status bar and also an option in the right-click menu for easy access.

## Features

- Automatic Detection: Spice Runner automatically detects when the opened file is a SPICE file (`.cir`) and enables the "Run SPICE" button in the top right corner of the editor.

- One-Click Execution: With a single click on the "Run SPICE" button, the extension executes the SPICE program and opens the SPICE GUI or terminal-based interface for further circuit exploration.

- Cross-Platform Support: Spice Runner is compatible with both Windows and Linux platforms. For Linux, SPICE can be installed using `sudo apt install spice`, and for Windows, the SPICE executable needs to be downloaded and its path provided in the extension settings.

## Installation

1. Open Visual Studio Code.

2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.

3. Search for "Run Spice" in the Extensions view search box.

4. Click on the "Install" button next to the Spice Runner extension.

5. After installation, reload Visual Studio Code to activate the extension.



## Getting Started
### Requirements

- SPICE must be installed on your system for Spice Runner to work. For Linux, use `sudo apt install spice` to install SPICE. For Windows, download the executable from the official website.

- Visual Studio Code version 1.60.0 or later is recommended for the best compatibility with Spice Runner.

1. Open a SPICE file (`.cir`) in Visual Studio Code.

2. Once the file is opened, Spice Runner will automatically detect it and activate the "Run SPICE" button in the top right corner of the editor.

3. Click on the "Run SPICE" button to execute the SPICE program.

4. Spice Runner will launch the SPICE GUI or terminal-based interface, allowing you to work with the circuit properties and parameters.


### Configuration (For Windows Users)

To use Spice Runner on Windows, make sure you have downloaded the SPICE executable from the official website and installed it in any folder on your system. Then, follow these steps:

1. Open Visual Studio Code.

2. Click on the gear icon in the lower-left corner to open the Settings.

3. In the Settings, search for "Run Spice Executable Path".

4. Provide the full path to the SPICE executable on your system.
   For e.g. `C:\\Program Files\\Spice64\\bin\\ngspice.exe` , you will need to provide the path like this.

6. Save the settings to apply the changes.


## TODO
1. Auto Lint and formating the code.
2. Can download the ngspice itself, if its not installed properly for both windows and linux.
3. Proper code highlighting and code tooltip for most of the command Spice builtin functions and modules.

## Known Issues

- Spice Runner may not work correctly if the SPICE executable path is not provided in the settings.

- Spice Runner may not detect certain SPICE files if they have non-standard extensions or file naming conventions.

## Feedback and Contributions

We welcome your feedback and contributions to improve Spice Runner. Feel free to report any issues on the GitHub repository or submit pull requests to enhance the functionality of the extension.

## License

Spice Runner is an open-source project licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Credits

- [Oleksandr Kolodkin](https://github.com/kolod) has done major contributions in this project.
  
## Acknowledgments

We extend our gratitude to all the contributors and users who have helped in the development and testing of Spice Runner.

---

Thank you for choosing Spice Runner to enhance your SPICE simulation experience. If you have any questions or need further assistance, don't hesitate to reach out to us. Happy circuit simulating!
