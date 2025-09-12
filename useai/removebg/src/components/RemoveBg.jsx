// App.jsx
import { useState } from "react";
import { removeBackground } from "@imgly/background-removal";

export default function RemoveBg() {
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      // remove background (make sure ONNX wasm files are in /public/onnx/)
      const blob = await removeBackground(file, { publicPath: "/onnx/" });
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
    } catch (err) {
      console.error("Background removal error:", err);
      alert("Failed to remove background. Check console.");
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Background Remover
      </h1>

      <label className="cursor-pointer px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg hover:opacity-90 transition mb-6">
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {isProcessing && (
        <p className="text-purple-300 animate-pulse">Processing image...</p>
      )}

      {processedImage && (
        <div className="mt-6 border-2 border-purple-500 rounded-xl p-4 bg-gray-800 shadow-xl">
          <img
            src={processedImage}
            alt="Without background"
            className="max-w-xs rounded-lg mx-auto"
          />
        </div>
      )}
    </div>
  );
}
