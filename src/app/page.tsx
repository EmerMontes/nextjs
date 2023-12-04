
const fetchUsers = async ()=>{
  const res = await fetch('https://reqres.in/api/users')
   const data: {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
  }[]= await res.json()
  return data
}


 export default async function Page() {
  const users: string[] = await fetchUsers()

  return <div>

  <h1>Hello, Next.js!</h1>
  <section>
    {users.map((user) => {
      <p>Name {user.first_name}</p>
    })}
  </section>
  </div> 
}