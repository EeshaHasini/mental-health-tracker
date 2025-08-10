import React, { useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "../../Styles/QuickNotePhoto.css";

export default function QuickNotePhoto() {
  const [photos, setPhotos] = useState([]);
  const [note, setNote] = useState("");
  const [submittedEntries, setSubmittedEntries] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setPhotos(selectedFiles);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    if (photos.length === 0) {
      alert("Please upload at least one photo!");
      return;
    }
    if (note.trim() === "") {
      alert("Please write a quick note!");
      return;
    }

    const newEntry = {
      date: new Date().toLocaleDateString(),
      photos: photos.map((file) => URL.createObjectURL(file)),
      note: note.trim(),
    };

    setSubmittedEntries([newEntry, ...submittedEntries]);
    setPhotos([]);
    setNote("");
  };

  return (
    <>
      <Header />
      <div className="photo-quick-note">
        <h2>📸 Quick Note with Photos</h2>
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={handleFileChange}
        />
        <textarea
          placeholder="Write your quick note..."
          value={note}
          onChange={handleNoteChange}
        />
        <button onClick={handleSubmit}>Save</button>

        <div className="preview-section">
          {submittedEntries.map((entry, index) => (
            <div key={index}>
              <p>{entry.date}</p>
              <div className="image-preview">
                {entry.photos.map((src, idx) => (
                  <img key={idx} src={src} alt="Uploaded" />
                ))}
              </div>
              <p>{entry.note}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
