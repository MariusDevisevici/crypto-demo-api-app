import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session }: { data: any } = useSession();
  if (session) {
    console.log(session.user);
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
