import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://localhost:3004/api/more/listings/9000');
  sleep(1);
}
