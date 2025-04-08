## 🎬 Reverse Video App

The **Reverse Video App** allows users to upload a video, which is then processed on the backend to generate a reversed version. The app features a clean, responsive frontend built with HTML, CSS, and JavaScript, and a powerful backend using ASP.NET Core with integrated video processing logic.

---

### 🚀 Features

- Upload a video file from your device.
- Process and reverse the video server-side.
- Watch the reversed video directly in your browser.
- Smooth and responsive UI for all devices.

---

### 🛠️ Tech Stack

#### 🔹 Frontend:
- HTML
- CSS
- JavaScript

#### 🔹 Backend:
- ASP.NET Core Web API
- C#

#### 🔹 Video Processing:
- FFmpeg (executed within the backend)

---

### 📦 Installation & Setup

#### 🔧 Prerequisites:
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- FFmpeg installed and added to system PATH

#### 💻 Clone the Repository:

```bash
git clone https://github.com/KoteswararaoKotagiri/reverse-video-app.git
cd reverse-video-app
```

#### ▶️ Run the Application:

1. Open the solution in **Visual Studio** or run the following command:

```bash
dotnet run --project ReverseVideoApp
```

2. The backend will start at:  
   `http://localhost:5219/`

3. Open `index.html` in your browser to access the frontend interface.

---

### ⚙️ How It Works

1. **User Uploads Video**:  
   The frontend allows users to select and upload a video file.

2. **Backend Processing (ASP.NET Core)**:  
   - Receives the file through an API endpoint.
   - Calls FFmpeg to reverse both video and audio streams.
   - Saves the processed output and returns it to the frontend.

3. **Result Display**:  
   The reversed video is shown in the browser using a `<video>` tag for immediate playback.

---

### 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo, suggest enhancements, or submit a pull request.


