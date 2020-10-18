import passwordgenerator from 'password-generator'

import Queue from '../lib/Queue'


export default{
    async store(req, res){
        const { name, email } = req.body;

        const user ={
            name,
            emai,
            password: passwordgenerator(15, false) //irei gerar uma senha random com 15 caracteres e que esses caracteres não irão se repetir
        };
        await Queue.add('registroMail', { user });
        



        return res.json(user);
    }
}