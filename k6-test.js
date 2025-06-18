import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

// Métricas custom
const productTrend = new Trend('latency_products', true);
const clientTrend = new Trend('latency_clients', true);
const productErrorRate = new Rate('errors_products');
const clientErrorRate = new Rate('errors_clients');
const productCallCount = new Counter('calls_products');
const clientCallCount = new Counter('calls_clients');

// Validar BASE_URL común
const BASE_URL = __ENV.BASE_URL;
if (!BASE_URL) {
    // Este error ocurrirá en setup(), pero para mayor claridad lo dejamos aquí
    throw new Error('La variable de entorno BASE_URL no está definida. Ejemplo: export BASE_URL=http://localhost:8000');
}
// Construir endpoints
const PRODUCTS_URL = `${BASE_URL}/api/products`;
const CLIENTS_URL = `${BASE_URL}/api/clients`;

export const options = {
    stages: [
        { duration: '20s', target: 5 },
        { duration: '40s', target: 5 },
        { duration: '20s', target: 10 },
        { duration: '40s', target: 10 },
        { duration: '20s', target: 0 },
    ],
    thresholds: {
        'latency_products': ['p(95) < 400'],
        'latency_clients': ['p(95) < 400'],
        'errors_products': ['rate<0.01'],
        'errors_clients': ['rate<0.01'],
        'http_req_failed': ['rate<0.01'],
    },
};

export function setup() {
    // Si requieres autenticación, descomenta y ajusta:
    // if (!__ENV.BASE_URL_AUTH) {
    //     throw new Error('Define BASE_URL_AUTH para auth');
    // }
    // const loginRes = http.post(`${__ENV.BASE_URL_AUTH}/auth/login`, JSON.stringify({
    //     username: __ENV.LOGIN_USER,
    //     password: __ENV.LOGIN_PASS,
    // }), { headers: { 'Content-Type': 'application/json' } });
    // if (loginRes.status !== 200) {
    //     throw new Error('Login fallido en setup');
    // }
    // return { token: loginRes.json('accessToken') };

    return {};
}

export default function (data) {
    // Preparar headers (añade Authorization si se usa auth)
    // const headers = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${data.token}`,
    //     },
    // };
    const headers = { headers: { 'Content-Type': 'application/json' } };

    // Products Service
    group('Products Service', function () {
        productCallCount.add(1);
        const res = http.get(PRODUCTS_URL, headers, { tags: { service: 'products' } });
        productTrend.add(res.timings.duration);
        productErrorRate.add(res.status !== 200);
        check(res, { 'products status 200': (r) => r.status === 200 });
    });

    // Clients Service
    group('Clients Service', function () {
        clientCallCount.add(1);
        const res = http.get(CLIENTS_URL, headers, { tags: { service: 'clients' } });
        clientTrend.add(res.timings.duration);
        clientErrorRate.add(res.status !== 200);
        check(res, { 'clients status 200': (r) => r.status === 200 });
    });

    // Puedes añadir aquí flujos combinados si en el futuro lo necesitas

    sleep(1);
}
