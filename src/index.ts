import Fastify from 'fastify';
import cors from '@fastify/cors';
import routes from './presentation/routes/routes';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const app = Fastify({ logger: true });

// Hook global para converter datas antes de enviar a resposta
app.addHook('onSend', async (request, reply, payload) => {
    try {
        if (typeof payload === 'string') {
            let json = JSON.parse(payload);

            // Função recursiva para converter todas as datas encontradas
            const convertDates = (obj: any): any => {
                if (Array.isArray(obj)) {
                    return obj.map(convertDates);
                } else if (obj && typeof obj === 'object') {
                    for (const key in obj) {
                        if (typeof obj[key] === 'string' && obj[key].match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
                            obj[key] = dayjs.utc(obj[key]).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
                        } else {
                            obj[key] = convertDates(obj[key]);
                        }
                    }
                }
                return obj;
            };

            json = convertDates(json);
            return JSON.stringify(json);
        }
    } catch (error) {
        app.log.error('Erro ao converter datas:', error);
    }

    return payload;
});

const setupCors = () => {
    app.register(cors, {
        origin: '*',
    });
};

const setupHealthCheck = () => {
    app.get('/health', async (request, reply) => {
        return 'System online!';
    });
};

setupCors();
setupHealthCheck();


routes.forEach(({ router, prefix}) => {
    app.register(router, { prefix});
})

const PORT = Number(process.env.PORT) || 3004;

app.listen({ host: '0.0.0.0', port: PORT }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server is running on ${address}`);
});