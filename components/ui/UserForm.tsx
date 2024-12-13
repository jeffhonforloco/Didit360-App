import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Button } from "./Button";
import { CreateUserInput, UpdateUserInput } from "../../types/user";

interface UserFormProps {
  initialValues?: UpdateUserInput;
  onSubmit: (data: CreateUserInput) => Promise<void>;
  onCancel: () => void;
}

export function UserForm({ initialValues, onSubmit, onCancel }: UserFormProps) {
  const [name, setName] = React.useState(initialValues?.name || '');
  const [email, setEmail] = React.useState(initialValues?.email || '');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    if (!name || !email) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit({ name, email });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <stackLayout style={styles.form}>
      <label style={styles.label}>Name:</label>
      <textField
        style={styles.input}
        text={name}
        onTextChange={(args) => setName(args.value)}
      />

      <label style={styles.label}>Email:</label>
      <textField
        style={styles.input}
        text={email}
        keyboardType="email"
        onTextChange={(args) => setEmail(args.value)}
      />

      <flexboxLayout style={styles.buttonContainer}>
        <Button
          text={isSubmitting ? "Saving..." : "Save"}
          onTap={handleSubmit}
          variant="primary"
        />
        <Button
          text="Cancel"
          onTap={onCancel}
          variant="secondary"
        />
      </flexboxLayout>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    fontSize: 16,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});