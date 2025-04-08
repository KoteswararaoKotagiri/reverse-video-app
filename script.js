function displayFileName() {
    const fileInput = document.getElementById("videoInput");
    const fileNameText = document.getElementById("fileName");

    if (fileInput.files.length > 0) {
        fileNameText.textContent = `Selected File: ${fileInput.files[0].name}`;
    } else {
        fileNameText.textContent = "";
    }
}

async function uploadVideo() {
    const fileInput = document.getElementById("videoInput");
    const fileNameText = document.getElementById("fileName");
    const removeBtn = document.getElementById("removeBtn");
    const videoPlayer = document.getElementById("videoPlayer");

    if (!fileInput.files.length) {
        alert("Please select a video file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    // Show loader
    document.getElementById("loader").style.display = "block";
    fileNameText.textContent = `Uploading: ${fileInput.files[0].name}...`;

    try {
        const response = await fetch("http://localhost:5219/api/video/upload", {
            method: "POST",
            body: formData
        });

        document.getElementById("loader").style.display = "none";

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const videoBlob = await response.blob();
        const videoUrl = URL.createObjectURL(videoBlob);

        fileNameText.textContent = `Processing complete: ${fileInput.files[0].name}`;
        videoPlayer.src = videoUrl;
        videoPlayer.load();
        videoPlayer.style.display = "block";
        removeBtn.style.display = "inline-block";
        videoPlayer.play();
    } catch (error) {
        console.error("Upload error:", error);
        fileNameText.textContent = "Error processing video.";
        alert("Failed to upload video.");
        document.getElementById("loader").style.display = "none";
    }
}

function removeVideo() {
    const fileInput = document.getElementById("videoInput");
    const fileNameText = document.getElementById("fileName");
    const removeBtn = document.getElementById("removeBtn");
    const videoPlayer = document.getElementById("videoPlayer");

    fileInput.value = "";
    fileNameText.textContent = "";
    videoPlayer.src = "";
    videoPlayer.style.display = "none";
    removeBtn.style.display = "none";
}
