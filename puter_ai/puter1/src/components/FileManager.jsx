import { useState } from "react";

export default function FileManager() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState("");

  const saveFile = async () => {
    await puter.fs.write("myNote.txt", text);
    alert("File saved!");
  };

  const readFile = async () => {
    let content = await puter.fs.read("myNote.txt");
    if(content instanceof Blob){
        const text = await content.text();
        setSaved(text)
    }else{
        setSaved(content);
    }
    console.log(content);
  };
  console.log(saved);

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">File Manager</h1>

      <textarea
        className="w-full border p-2 rounded"
        rows="4"
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="space-x-2">
        <button
          onClick={saveFile}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={readFile}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Read
        </button>
      </div>

      {saved && (
        <div className="p-3 border rounded bg-gray-50">
          <strong>Saved File Content:</strong>
          <p>{saved}</p>
        </div>
      )}
    </div>
  );
}
