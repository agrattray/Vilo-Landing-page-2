
module.exports = async function (context, req) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: { success: false, message: "All fields are required." }
        };
        return;
    }

    context.log(`New contact form: ${name} | ${email} | ${message}`);

    context.res = {
        status: 200,
        body: { success: true, message: "Thanks for contacting us!" }
    };
};
