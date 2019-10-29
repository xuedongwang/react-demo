import dayjs from 'dayjs';

import http from '@/utils/http';

import '@/assets/scss/index.scss';

window.$date = dayjs;
window.$http = http;
