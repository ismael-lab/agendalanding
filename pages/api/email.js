import { SMTPClient } from 'emailjs';

export default function handler(req, res) {
    const client = new SMTPClient({
        user:'creaprodv@gmail.com',
        password:'zgbnydvhxoosyyyk',
        host:'smtp.gmail.com',
        ssl:true
    })

    //let email_to = "creaprodv@gmail.com"
    let email_to = "creajovem@crea-sc.org.br"

    let {email,subject,message} = req.body
    let text = message + " Email: " + email

    try{
    
        client.send({
            subject:subject,
            text:text,
            from: "creaprodv@gmail.com",
            to:email_to,
            attachments:[
                {data:text,alternative:true}
            ]
        })
        
        res.status(200).end(JSON.stringify({ message:'Send Mail',status:'ok' }))
    }catch(e){
        res.status(200).end(JSON.stringify({ message:"Error",status:"error" }))
        return;
    }
}