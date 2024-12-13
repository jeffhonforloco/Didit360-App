import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { AuthService } from "../../services/auth.service";
import { Button } from "../ui/Button";
import { showAlert } from "../../utils/alerts";
import { commonStyles } from "../../styles/common";

export function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (!email) {
      await showAlert("Please enter your email");
      return;
    }

    setIsLoading(true);
    try {
      await AuthService.requestPasswordReset(email);
      await showAlert("Password reset instructions have been sent to your email");
      navigation.navigate("Login");
    } catch (error) {
      await showAlert("Failed to process password reset request");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <flexboxLayout style={[commonStyles.container, styles.container]}>
      <label className="text-2xl mb-4 font-bold text-center">Reset Password</label>
      
      <label style={styles.description}>
        Enter your email address and we'll send you instructions to reset your password.
      </label>

      <textField
        style={styles.input}
        hint="Email"
        keyboardType="email"
        text={email}
        onTextChange={(args) => setEmail(args.value)}
      />

      <Button
        text={isLoading ? "Sending..." : "Send Reset Instructions"}
        onTap={handleSubmit}
        variant="primary"
      />

      <button
        style={styles.backLink}
        onTap={() => navigation.goBack()}
      >
        Back to Login
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlignment: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  backLink: {
    marginTop: 16,
    color: "#2e6ddf",
    fontSize: 16,
  },
});