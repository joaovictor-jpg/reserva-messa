import app from "./src/app";

const port = process.env.PROT || 3000;

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});