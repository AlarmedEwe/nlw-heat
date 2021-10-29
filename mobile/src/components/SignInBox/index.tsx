import React from "react";
import { View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { COLORS } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";

export const SignInBox = () => {
	const { signIn, isSigningIn } = useAuth();

	return (
		<View style={styles.container}>
			<Button
				title="ENTRAR COM O GITHUB"
				color={COLORS.BLACK_SECONDARY}
				backgroundColor={COLORS.YELLOW}
				icon="github"
				onPress={signIn}
				isLoading={isSigningIn}
			/>
		</View>
	);
};
