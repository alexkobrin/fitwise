"use   client";

import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const GenerateProgramPage = () => {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  const messageContainder = useRef<HTMLDivElement>(null);

  // navigate to profile page after call ends
  useEffect(() => {
    if (callEnded) {
      const redirectTimer = setTimeout(() => {
        router.push("/profile");
      }, 2000);
      return () => clearTimeout(redirectTimer); // cleanup timer on unmount
    }
  }, [callEnded, router]);

  // auto scroll messages
  useEffect(() => {
    if (messageContainder.current) {
      messageContainder.current.scrollTop =
        messageContainder.current.scrollHeight;
    }
  }, [messages]);

  // setup for vapi event listeners
  useEffect(() => {
    const handleCallStart = () => {
      console.log("Call started");
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };
    const handleCallEnd = () => {
      console.log("Call ended");
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };
    const handleSpeechStart = () => {
      console.log("Speech started");
      setIsSpeaking(true);
    };
    const handleSpeechEnd = () => {
      console.log("Speech ended");
      setIsSpeaking(false);
      setCallActive(false);
    };
    const handleMessage = (msg: any) => {};
    const handleError = (error: any) => {
      console.log("Error  Vapi occurred:", error);
      setConnecting(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    // cleanup function to remove event listeners

    return () => {
      vapi
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, []);

  const toggleCall = async () => {
    if (callActive) vapi.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);
        const  fullName = user?.firstName ? `${user?.firstName || ""} ${user?.lastName || ""}`.trim() : "Anonimous User";

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
          variableValues: {
            full_name: fullName,
          },
        });
      } catch (error) {
        console.error("Error starting call:", error);
        setConnecting(false);
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>Generate Program</h1>
      <p>
        Welcome to the program generator page. Start building your custom
        program here.
      </p>
    </main>
  );
};

export default GenerateProgramPage;
