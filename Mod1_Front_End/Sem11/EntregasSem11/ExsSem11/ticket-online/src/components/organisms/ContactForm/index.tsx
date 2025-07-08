// Ex 4 – Ticket Online: Componente Contato
// Requisito: Criar formulário de e-mail usando React Hook Form.

import { useForm } from "react-hook-form";
import "./style.css";

interface ContactFormData {
    email: string;
    assunto: string;
    mensagem: string;
    urgência?: boolean;
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>();

    // Função chamada no envio do formulário
    const onSubmit = (data: ContactFormData) => {
        // Verifica a passagem correta dos parâmetros via console.log
        console.log("Dados do Formulário:", data);
        alert(
            `Obrigado pelo contato, ${data.email}! Seus dados foram registrados no console.`
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h2>Entre em Contato</h2>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                {/* Registro do campo 'email' com validação de obrigatoriedade */}
                <input
                    id="email"
                    {...register("email", {
                        required: "O e-mail é obrigatório",
                    })}
                />
                {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="assunto">Assunto</label>
                {/* Registro do campo 'assunto' com validação de obrigatoriedade */}
                <input
                    id="assunto"
                    {...register("assunto", {
                        required: "O assunto é obrigatório",
                    })}
                />
                {errors.assunto && (
                    <p className="error-message">{errors.assunto.message}</p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                {/* Registro do campo 'mensagem' com validação de obrigatoriedade */}
                <textarea
                    id="mensagem"
                    {...register("mensagem", {
                        required: "A mensagem é obrigatória",
                    })}
                />
                {errors.mensagem && (
                    <p className="error-message">{errors.mensagem.message}</p>
                )}
            </div>

            <div className="form-group-checkbox">
                {/* Campo opcional de urgência (booleano) */}
                <input
                    type="checkbox"
                    id="urgência"
                    {...register("urgência")}
                />
                <label htmlFor="urgência">É urgente?</label>
            </div>

            <button type="submit" className="btn-submit">
                Enviar
            </button>
        </form>
    );
};

export default ContactForm;
