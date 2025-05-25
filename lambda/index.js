const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const clickhouseUrl =
  "https://ymemq2ogwy.us-west-2.aws.clickhouse.cloud:8443/?query=INSERT%20INTO%20docker_logs%20FORMAT%20JSONEachRow";

const clickhouseUser = process.env.CLICKHOUSE_USER || "default";
const clickhousePassword = process.env.CLICKHOUSE_PASSWORD || "CLcefL.z9dsJY";

exports.handler = async (event) => {
  console.log("Evento recibido:", JSON.stringify(event, null, 2));

  if (!event.Records || event.Records.length === 0) {
    console.warn("No hay registros en el evento.");
    return { statusCode: 200 };
  }

  for (const record of event.Records) {
    try {
      console.log("Procesando record:", record);

      const body = JSON.parse(record.body);

      // Añadir log_id generado automáticamente
      body.log_id = uuidv4();

      console.log("Body con log_id:", body);

      const res = await axios.post(clickhouseUrl, body, {
        auth: {
          username: clickhouseUser,
          password: clickhousePassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Respuesta de ClickHouse:", res.status, res.statusText);
    } catch (err) {
      console.error("Error al enviar log:", err.message);
      console.error("Stack:", err.stack);
    }
  }

  return { statusCode: 200 };
};
