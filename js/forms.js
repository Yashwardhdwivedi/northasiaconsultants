import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const candidateForm = document.getElementById("candidateForm");

if (candidateForm) {
  candidateForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;

    try {
      await addDoc(collection(db, "candidates"), {
        name,
        email,
        experience,
        createdAt: new Date()
      });

      alert("Application submitted successfully!");
      candidateForm.reset();

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  });
}
