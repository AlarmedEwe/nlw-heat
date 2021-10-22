import React from "react";
import { ScrollView } from "react-native";
import { Message } from "../Message";
import { styles } from "./style";

const msg = {
	id: "1",
	text: "Mensagem",
	user: {
		name: "Ana",
		avatar_url: "",
	},
};

export const MessageList = () => {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
			keyboardShouldPersistTaps="never"
		>
			<Message data={msg} />
			<Message data={msg} />
			<Message data={msg} />
		</ScrollView>
	);
};
