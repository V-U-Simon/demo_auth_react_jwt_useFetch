import { useSession } from "src/hooks/useSession";

export function Profile() {
  const { session } = useSession();
  const { user } = session;
  return (
    <>
      <div className="flex flex-col w-96 gap-4 m-10">
        <h3 className="text-3xl text-center">Profile</h3>
        <ProfileInput name={"ID"} placeholder={user?.id} />
        <ProfileInput name={"username"} placeholder={user?.username} />
        <ProfileInput name={"email"} placeholder={user?.email} />
        <ProfileInput name={"is active"} placeholder={String(user?.is_active)} />
        <ProfileInput name={"created"} placeholder={Date(user?.created)} />
        <ProfileInput name={"updated"} placeholder={Date(user?.updated)} />
        <p className="w-2/6 text-lg">access token</p>
        <textarea className="textarea textarea-bordered" placeholder={session?.access}></textarea>
        <p className="w-2/6 text-lg">refresh token</p>
        <textarea className="textarea textarea-bordered" placeholder={session?.refresh}></textarea>
      </div>
    </>
  );
}

function ProfileInput({ placeholder, name }) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <p className="w-2/6 text-lg text-right">{name}</p>
      <input type="email" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
    </div>
  );
}
