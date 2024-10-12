// Definir as credenciais diretamente (não recomendado para produção)
const account_sid = 'YOUR_TWILIO_ACCOUNT_SID';
const auth_token = 'YOUR_TWILIO_AUTH_TOKEN';

// Função para enviar a mensagem do WhatsApp
function enviarWhatsApp(nome, telefone, email, descricao) {
    const client = require('twilio')(account_sid, auth_token);

    const mensagem = `
    Nome: ${nome}
    Telefone: ${telefone}
    Email: ${email}
    
    Descrição:
    ${descricao}
    `;

    client.messages.create({
        from: 'whatsapp:+553193395119',
        to: 'whatsapp:+55SEU_NUMERO_DE_TELEFONE',
        body: mensagem,
    })
    .then((message) => console.log("Mensagem enviada com sucesso", message.sid))
    .catch((error) => console.error("Erro ao enviar mensagem", error));
}
