export function Home() {
  return (
    <>
      <div className="hero max-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">Demo Auth: React / JWT / useFetch</h1>

            <p className="py-6">
              This is a simple example of implementing JWT tokens on client side for user authorization.
              <br />
              You can can alse using <a href="https://github.com/V-U-Simon/demo_auth_drf_jwt" className="link"></a>
              demo_auth_drf_jwt repository for backend for authentication.
            </p>

            <a href="/login/" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
