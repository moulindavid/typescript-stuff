import { useTurso } from "./turso";

async function main(){
    const client = useTurso();
    const rs = await client.execute("select * from users"  );
    console.log(rs);
    client.close();
}

main()

