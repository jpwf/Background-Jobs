import mail from '../lib/mail';

export default {

    key:"registrationMail",
    options: {
            delay:5000,
            priority: 3
            
    },
    async handle({ data }) {
        const { user } = data;
        await mail.sendMail({
            from: 'projeto <eumesmonegaodabl@uol.com.br>',
            to:   `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem vindo ao projeto.`
        })
    }
}