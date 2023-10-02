"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";

export interface ChatProps {}

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[900px] bg-white rounded-3xl ">
      <CardHeader>
        <CardTitle className="text-4xl flex gap-3">
          <div className="text-gray-yg">
            <span className="text-gold">CHAT</span> AI
          </div>
          <div>
            <span className="text-lg">by Yago Oliveira</span>
          </div>
        </CardTitle>
        <CardDescription>Chat bot with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[700px] w-full space-y-4 pr-5">
          {messages.map((message) => {
            return (
              <div key={message.id} className="flex gap-3 text-sm mb-4">
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>User: </AvatarFallback>
                    <AvatarImage src="https://github.com/YagoOliveira59.png" />
                  </Avatar>
                )}
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI: </AvatarFallback>
                    <AvatarImage src="https://github.com/YagoOliveira59.png" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "User: " : "AI: "}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          ></Input>
          <Button type="submit">
            <Image
              src="/send.svg"
              alt="Send icon"
              width={30}
              height={30}
            ></Image>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
