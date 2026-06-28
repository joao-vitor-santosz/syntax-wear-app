import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z
  .object({
    firstName: z.string().nonempty("O primeiro nome é obrigatório"),

    lastName: z.string().nonempty("O último nome é obrigatório"),

    email: z.email("E-mail inválido"),

    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "A senha deve ter pelo menos 8 caracteres"),

    confirmPassword: z
      .string()
      .nonempty("A confirmação de senha é obrigatória"),

    cpf: z.string().nonempty("O CPF é obrigatório").refine(isValidCPF, {
      message: "CPF inválido",
    }),

    birthDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Data de nascimento inválida",
      }),
    phone: z.string().nonempty("O celular é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });

export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
      birthDate: "",
      phone: "",
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
}
