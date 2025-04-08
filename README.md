# Reverse Video App

## Overview
The **Reverse Video App** is a web-based tool that allows users to upload a video file and receive a reversed version of that video. The application is built with a **.NET backend** for handling video processing and provides a responsive, user-friendly frontend using **HTML, CSS, and JavaScript**.

---

## Features
- Upload a video file for reversal.
- Process the video on the server side using .NET.
- Preview the reversed video directly in the browser.
- Download the processed video.
- Responsive design compatible with desktop and mobile browsers.

---

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- ASP.NET Core (.NET 8)

### Video Processing
- MediaToolkit
- FFmpeg (via wrapper)

---

## Installation

### Prerequisites
- .NET 8 SDK installed
- Visual Studio or any C# compatible IDE
- FFmpeg installed and added to system PATH

### Clone the Repository
```bash
git clone https://github.com/KoteswararaoKotagiri/reverse-video-app.git
cd reverse-video-app
```

### Set Up the Project
1. Open the solution in Visual Studio.
2. Restore NuGet packages.
3. Build the project to ensure everything compiles.

### Run the Application
- Press `F5` in Visual Studio or run:
```bash
dotnet run
```
- Open your browser and navigate to `http://localhost:5000` to access the app.

---

## How It Works

### 1. File Upload
Users can upload a video file via a simple form on the web interface. The backend receives and temporarily stores the file.

### 2. Video Processing
The backend uses MediaToolkit/FFmpeg to reverse the video frames and audio stream. The reversed video is saved and returned as a downloadable or viewable file.

### 3. Video Playback
Once processed, the reversed video is played directly in the browser using a standard HTML5 video player.

---

## Contributing
Contributions are welcome! If you have suggestions, bug fixes, or feature enhancements, feel free to open an issue or submit a pull request.

