import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("");
  const [aiReady, setAiReady] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRed = useRef(null)

  //! intially setting up a message regarding ai status
  useEffect(() => {
    const checkReady = setInterval(() => {
      if (
        window.puter && window.puter.ai && typeof window.puter.ai.chat === 'function'
      ) {
        setAiReady(true)
        clearInterval(checkReady)
      }
    }, 300);
    return () => clearInterval(checkReady)
  }, [])

  function scrollToBottm() {
    messagesEndRed.current?.scrollIntoView({ behaviour: 'smooth' })
  }

  useEffect(scrollToBottm, [messages])

  function addMessages(msg, isUser) {
    setMessages((prev) => ([...prev, { content: msg, isUser, id: Date.now() + Math.random() }]))
  }

  async function sendMessage() {
    const message = inputValue.trim()
    if (!message) return
    if (!aiReady) {
      addMessages("🛬 AI service is still Loading. Please Wait !...", false)
      return;
    }
    addMessages(message, true)
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await window.puter.ai.chat(message)
      const reply = typeof response === 'string' ? response : response.message?.content || "🤖 Didn't Receive any Response"
      addMessages(reply, false)
    } catch (err) {
      addMessages(`❌ Error : ${err.message || "something went wrong."}`, false)
    } finally {
      setIsLoading(false)
    }
  }

  function handlekeyPress(e) {
    console.log(e.shiftKey);
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  console.log({aiReady,isLoading,inputValue:!inputValue.trim()});

  return (
    <>
      <div className='border-6 min-h-screen bg-gradient-to-br from-sky-900 via-slate-950 to-emerald-900 flex flex-col items-center justify-center gap-8 p-4'>
        <h1 className=' text-6xl sm:text-7xl font-light bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 bg-clip-text text-transparent text-center h-20'>AI Chat APP</h1>

        <div className={`border-3 border-red-600 px-4 py-2 rounded-full text-sm
          ${aiReady ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"}
        `} >
          {aiReady ? "🟢 AI is Ready" : "🔴 Waiting for AI"}
        </div>

        <div className=' border-3 w-full max-w-2xl bg-gradient-to-r from-gray-800/90 to-gray-700/90
        backdrop-blur-md border-gray-600 rounded-3xl p-6 shadow-2xl ' >
          <div className="border-5 border-yellow-600 h-80 overflow-y-auto border-b border-gray-600 mb-6 p-4 bg-gradient-to-b
          from-gray-900/50 to-gray-800/50 rounded-2xl
          ">

            {/* //! if there is not even a single converstaion between ai and user then for intial phase */}
            {
              messages.length === 0 && (
                <div className=' text-center text-gray-400 mt-20 ' >
                  👋 start converstation by typing a below.
                </div>
              )
            }

            {/* //! here we will be displaying the communication chats among "user" and "AI" */}
            {
              messages.map((msg) => (
                <div key={msg.id} className={` p-3 m-2 rounded-2xl max-w-xs text-wrap
              ${msg.isUser ? "bg-gradient-to-r from-blue-600 to-emerald-400 text-white ml-auto text-right" : " bg-gradient-to-r from-emerald-600 to-indigo-600 text-white "} `} >
                  <div>{msg.content}</div>
                </div>
              ))
            }

            {/* //! Here We will display thinking untill the response comes from ai */}
            {
              isLoading && (
                <div className='p-3 m-2 rounded-2xl max-w-xs bg-gradient-to-r from-emerald-600 to-indigo-600 text-white' >
                  <div className='flex items-center gap-2' >
                    <div className='animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full' ></div>
                    Thinking
                  </div>
                </div>
              )
            }
            <div ref={messagesEndRed} ></div>
          </div>
          <div className='flex flex-row sm:flex-col gap-3' >
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handlekeyPress}
              placeholder={aiReady ? "Type Your message..." : "Waiting for the AI to be ready..."} disabled={!aiReady || isLoading}
              className='flex-1 px-4 py-3 bg-gray-700/80 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none
          focus:ring-2 focus:shadow-xl focus:shadow-sky-400/80 focus:ring-sky-500 transition duration-400 disabled:opacity-50 disabled:cursor-not-allowed'
            />
            <button onClick={sendMessage} disabled={!aiReady || isLoading || !inputValue.trim()}
              className='px-6 py-3 bg-gradient-to-r from-sky-400 to-emerald-400 hover:opacity-80 text-white font-semibold rounded-2xl
           transition disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {
                isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin w-4 h-4
                  border-2 border-white/30 border-t-white rounded-full"></div>
                    sending
                  </div>
                ) : "send"
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
