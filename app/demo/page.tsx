"use client"
import React, { useState } from "react";

export default function Demo() {
  const [prompt, setPrompt] = useState("");
  const [out, setOut] = useState("");
  const callDemo = async () => {
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      setOut(data.text || JSON.stringify(data));
    } catch (e) {
      setOut("Error: " + String(e));
    }
  };
  return (
    <div>
      <h2>Live demo</h2>
      <textarea value={prompt} onChange={(e)=>setPrompt(e.target.value)} rows={4} style={{width:'100%'}} />
      <button onClick={callDemo} style={{marginTop:8}}>Run</button>
      <pre style={{marginTop:12,background:'#111',padding:12}}>{out}</pre>
    </div>
  );
}
