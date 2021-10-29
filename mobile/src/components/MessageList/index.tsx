import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { io } from "socket.io-client";
import { api } from "../../services/api";
import { Message, MessageProps } from "../Message";
import { styles } from "./style";

let messagesQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));

socket.on("new_message", (newMessage) => {
	messagesQueue.push(newMessage);
});

export const MessageList = () => {
	const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

	useEffect(() => {
		async function fetchMessages() {
			const messageResponse = await api.get("/messages/last3");
			setCurrentMessages(messageResponse.data);
		}

		fetchMessages();
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			if (messagesQueue.length > 0) {
				setCurrentMessages((prevState) => [
					messagesQueue[0],
					prevState[0],
					prevState[1],
				]);

				messagesQueue.shift();
			}
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
			keyboardShouldPersistTaps="never"
		>
			{currentMessages.map((message) => (
				<Message key={message.id} data={message} />
			))}
		</ScrollView>
	);
};
