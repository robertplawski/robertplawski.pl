import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInputTextarea,
  PromptInputSubmit,
  PromptInput,
} from "@/components/ai-elements/prompt-input";
import { useEffect, useState } from "react";
import { UIMessage, useChat } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";
import { uuid } from "zod/v4";
import { AlertCircle, Loader2, LucideBrain } from "lucide-react";

function AgentConversation() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, setMessages } = useChat();
  useEffect(() => {
    setMessages((prev) => [
      { id: -1, role: "assistant", parts: [{ type: "text", text: "I'm a helpful assistant, you can ask me anything." }] } as unknown as any,
      ...prev]);
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput("");
    }
  };

  return (
    <div className="max-w-5xl w-full  mx-auto p-6 backdrop-blur-sm relative size-full rounded-lg border h-[500px]">
      <div className="flex w-full flex-col h-full ">
        <Conversation>
          <ConversationContent>
            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.filter((part) => part?.type === "text").length < 0 && <Loader2 className="animate-spin duration-700  " />}
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <Response key={`${message.id}-${i}`}>
                            {part.text}
                          </Response>
                        );
                      //case "reasoning":
                      //  return <p><LucideBrain />{part.text}</p>
                    }
                  })}
                  {message.role === "assistant" && 
                  <div className="pt-2 gap-2 text-sm opacity-70">
                    <AlertCircle className="float-left mr-2" size={18}/>
                    <p>(treść ma charakter poglądowy i może być niezgodna z prawdą)</p>
                  </div>
                  }
                </MessageContent>
              </Message>
            ))}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Just ask..."
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={status === "streaming" ? "streaming" : "ready"}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </PromptInput>
      </div>
    </div>
  );
}

export default AgentConversation;
