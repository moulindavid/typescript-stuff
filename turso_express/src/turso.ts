import { createClient } from '@libsql/client/web';

export function useTurso () {

  return createClient({
    url: "libsql://lozere-moulindavid.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODUzNjE3NzAsImlkIjoiNmVlNTVmNjEtZmUxNi0xMWVkLThhZGUtMDY0MGUyYjJjMGRmIn0.eRrUGlXq2ZxPg4PZ0xDvZZxLXiq4_MjHHry1EAwTmzkSYioTqZfNFmw2a_fNpC5JuTr2VQOn_MAKonj-CwKTDw",
  });
}

